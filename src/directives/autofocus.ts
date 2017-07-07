import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';

@Directive({
    selector: '[autofocus]' // Attribute selector
})
export class AutofocusDirective {
	@Input('autofocus') autofocus: boolean;

	constructor(
		private keyboard: Keyboard,
		private renderer: Renderer,
		private elementRef: ElementRef) {
	}

	ngAfterViewInit() {
		if (this.autofocus !== false) {
			const element = this.elementRef.nativeElement.querySelector('input');
			// we need to delay our call in order to work with ionic ...
			setTimeout(() => {
				this.renderer.invokeElementMethod(element, 'focus', []);
				this.keyboard.show();
			}, 1000);
		}
	}
}
