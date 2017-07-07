import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'example-component',
	templateUrl: './example-component.html'
})
export class ExampleComponent {
	@Input() text: string;
	private _color: string = "black";

	@Input()
	set layout(color: string) {
		this._color = color;
	}

	get layout() {
		return this._color;
	}
}
