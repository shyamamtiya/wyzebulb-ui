import {
	Component,
	ViewChild,
	ViewContainerRef,
	ComponentFactoryResolver,
	ComponentRef,
	ComponentFactory,
	OnInit
} from '@angular/core';
import { IncomingdataComponent } from '../incomingdata/incomingdata.component';
import { UtilityService } from '../utility.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
	@ViewChild('incData', { read: ViewContainerRef })
	entry: ViewContainerRef;
	key: string = '';
	value: string = '';
	obj = [];
	userValue: any;
	finalJsonObj: any;
	keys: any;
	operator: any;
	selectedField: any;
	msg: string = '';
	phone: any;
	isData = false;
	constructor(
		private resolver: ComponentFactoryResolver,
		public utilitService: UtilityService,
		public apiService: ApiService,
		public router: Router
	) {
		this.utilitService.keyValue.subscribe((data) => {
			this.obj.push(data);
			console.log('final', this.obj);
		});
	}

	ngOnInit() {}

	createComponent() {
		const factory = this.resolver.resolveComponentFactory(IncomingdataComponent);
		const componentRef = this.entry.createComponent(factory);
	}
	display(data) {
		console.log('key in ', data);
	}
	send() {
		this.obj.splice(0, 1);
		console.log(this.obj);
		var str = '';
		this.obj.forEach((element) => {
			str += JSON.stringify(element);
			str = str.replace('{', '');
			str = str.replace('}', '');
			str += ',';
			console.log('string str', str);
		});
		this.finalJsonObj = JSON.parse('{' + str.substr(0, str.length - 1) + '}');
		this.keys = Object.keys(this.finalJsonObj);
		console.log(this.keys);
		this.isData = true;
	}

	onChange(value) {
		this.selectedField = value;
	}

	onCondition(value) {
		this.operator = value;
	}
	onSelectPhone(value) {
		this.phone = value;
		console.log('phone', this.phone);
	}
	sendSMS() {
		this.finalJsonObj.msg = this.msg;
		this.finalJsonObj.phone = this.phone;
		this.finalJsonObj.selectedField = this.selectedField;
		this.finalJsonObj.operator = this.operator;
		this.finalJsonObj.inpValue = this.userValue;
		console.log('finallll', this.finalJsonObj);
		this.apiService
			.sendMsg(this.finalJsonObj)
			.then((res) => {
				console.log(res);
				if (res._body == 'SMS Sent') {
					this.router.navigateByUrl('/success');
				} else if (res._body == 'Unable to send msg due to condition mismatch') {
					this.router.navigateByUrl('/error');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
