import { Component, Input, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'floating-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	@Input() disp = true;
	
	constructor() { }

	ngOnInit() { }
}