import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
	selector: 'app-incomingdata',
	templateUrl: './incomingdata.component.html',
	styleUrls: [ './incomingdata.component.scss' ]
})
export class IncomingdataComponent implements OnInit {
	value1: string = '';
	key: string = '';

	constructor(public utilitService: UtilityService) {}

	ngOnInit() {}
	sendData() {
		console.log('key:' + this.key + 'value: ' + this.value1);
		this.utilitService.getValues(this.key, this.value1);
	}
}
