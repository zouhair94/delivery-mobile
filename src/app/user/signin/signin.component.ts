import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

	constructor(
		private page: Page,
	) { }
	name = '';
	surname = '';
	id = '';
	cid = '';
	phone = '';
	email = '';
	password = '';
	ngOnInit() { 
		this.page.actionBarHidden = true;
	}
}