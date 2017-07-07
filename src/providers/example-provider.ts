import { Injectable } from '@angular/core';

@Injectable()
export class ExampleProviderService {

	constructor() {
	}

	doSomething() {
		console.log("I did it!");
	}

}
