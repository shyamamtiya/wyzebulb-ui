import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyspipe' })
export class KeysPipe implements PipeTransform {
	transform(value, args: string[]): any {
		let keys = [];
		for (var enumMember of value) {
			let key = Object.keys(enumMember);
			let value = Object.keys(enumMember).map((key) => enumMember[key]);
			keys.push({ key: key, value: value });
		}
		console.log(keys);
		return keys;
	}
}
