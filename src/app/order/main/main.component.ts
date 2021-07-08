import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';


@Component({
	moduleId: module.id,
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true
	 }
}