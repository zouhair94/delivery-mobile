import { Component, OnInit } from '@angular/core';
import { TextField, Utils, Page, Dialogs, EventData } from '@nativescript/core';
import { Login } from './shared/login.model';
import { LoginService } from './shared/login.service';
import { ActivityIndicator } from '@nativescript/core'
@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	providers: [LoginService]
})

export class LoginComponent implements OnInit {
	login: Login[] = [];
	userData = {
		mail: '',
		password: ''
	}
	isBusy = true;


	constructor(
		private loginService: LoginService,
		private page: Page,
	) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
	submit() {
		Dialogs.alert(`email ${this.userData.mail}  ss`)
	}
	onBusyChanged(args: EventData) {
		let indicator = args.object
		console.log(`indicator.busy changed to: ${indicator}`)
	  }
}