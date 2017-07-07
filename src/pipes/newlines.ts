import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'newlines'
})
export class NewlinesPipe implements PipeTransform {

	constructor() {
	}

	transform(value: string): any {
		if (!value) return value;
		let re = /(\s*\n\s*)+/gi;
		return value.trim().replace(re, "<br><br>");
	}
}
