import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, BrowserXhr, Http, RequestOptions, XHRBackend } from '@angular/http';
import { IonicModule } from 'ionic-angular';

import { ExampleComponent } from './components';
import { AutofocusDirective } from './directives';
import { ExampleModal } from './modals';
import { NewlinesPipe } from './pipes';
import { ExampleProviderService } from './providers';

export * from './components';
export * from './directives';
export * from './pipes';
export * from './providers';

export function coreComponents() {
	return [
		ExampleComponent,
	];
}

export function coreModals() {
	return [
		ExampleModal
	];
}

export function corePipes() {
	return [
		NewlinesPipe,
	];
}

export function coreDirectives() {
	return [
		AutofocusDirective,
	];
}

export function coreProviders() {
	return [
		/* Services */
		ExampleProviderService,
	];
}

@NgModule({
	declarations: [
		coreComponents(), ...coreDirectives(), ...corePipes(), coreProviders()
	],
	providers: [
	],
	exports: [
		...coreDirectives(), ...corePipes()
	],
	imports: [
		CommonModule,
		HttpModule,
		IonicModule
	]
})
export class ExampleCommonModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ExampleCommonModule,
			providers: [
				...coreProviders()
			]
		};
	}
}
