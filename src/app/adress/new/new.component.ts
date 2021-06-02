import { Component, OnInit } from '@angular/core';
import { IAddress } from '../IAdress';

@Component({
	moduleId: module.id,
	selector: 'new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

	adress: IAddress;

	constructor() { }

	ngOnInit() { 
		this.adress.title = ""
		this.adress.address = ""
		this.adress.province = "Casablanca"
		this.adress.city = "Casablanca"
	}
}