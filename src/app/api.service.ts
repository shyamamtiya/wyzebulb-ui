import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url = ' https://young-taiga-90446.herokuapp.com/';
	constructor(public http: Http) {}

	sendMsg(obj): Promise<any> {
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.post(this.url + 'sms/sms', JSON.stringify(obj), { headers: headers }).subscribe(
				(data) => {
					resolve(data);
				},
				(error) => {
					reject(error);
				}
			);
		});
	}
}
