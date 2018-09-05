import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	public name = new BehaviorSubject<any>('');
	public keyValue = this.name.asObservable();
	public anotherValue = new BehaviorSubject<string>('');
	public keyValue1 = this.anotherValue.asObservable();

	constructor() {}

	getValues(key, value) {
		var a = new Array();
		a[key] = value;
		this.name.next({ ...a });
	}
}
