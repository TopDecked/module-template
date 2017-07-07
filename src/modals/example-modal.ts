import { Component, ViewChild } from '@angular/core';
import { Content, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'example-modal',
	templateUrl: `./example-modal.html`
})
export class ExampleModal {
	@ViewChild(Content) content: Content;

	constructor(
		private viewCtrl: ViewController
	) {
	}

	public dismiss() {
		this.viewCtrl.dismiss();
	}
}
