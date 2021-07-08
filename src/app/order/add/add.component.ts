import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { IOrder } from '../../shared/models';


@Component({
	moduleId: module.id,
	selector: 'add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

	order: IOrder;

	items = [
		{id: 'loool' , title: "loool"},
		{id: 'loool' , title: "loool"},
		{id: 'loool' , title: "loool"},
		{id: 'loool' , title: "loool"},
		{id: 'loool' , title: "loool"},
	]

	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.order = {
			title: "",
			description: "",
			from: "",
			to: ""
		}
	 }
}