import { TestBed, inject } from '@angular/core/testing';

import { NewComponent } from './new.component';

describe('a new component', () => {
	let component: NewComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NewComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NewComponent], (NewComponent) => {
		component = NewComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});