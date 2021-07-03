import { TestBed, inject } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('a add component', () => {
	let component: AddComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AddComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AddComponent], (AddComponent) => {
		component = AddComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});