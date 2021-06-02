import { Component, Input, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'floating-btn',
	templateUrl: './floating-btn.component.html',
	styleUrls: ['./floating-btn.component.css']
})

export class FloatingBtnComponent implements OnInit {

	@Input() widthVal = 56;
	@Input() heightVal = 56;
	@Input() textLabel = "+";
	@Input() color = "orange";
	@Input() disp = true;

	button;

	constructor(private page: Page) { }

	ngOnInit() {}
}