import { Component, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Page, Screen } from '@nativescript/core'
import { Home } from './shared/home.model';
import { HomeService } from './shared/home.service';


@Component({
	moduleId: module.id,
	selector: 'home',
	styleUrls: ['home.component.css'],
	templateUrl: 'home.component.html',
	providers: [HomeService]
})

export class HomeComponent implements OnInit,OnChanges {

	home: Home[] = [];
	addMenu: boolean = false;
	btnFab;
	btnOrder;
	btnAddress;
	scroll= { width:0, height: 0};
	absolute;

	orders = [
		{
			title: 'order1',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order2',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order3',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order4',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
	]
	adresses = [
		{
			title: 'order1',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order2',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order3',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
		{
			title: 'order4',
			adressFrom: 'asdjl,asjdlkjas;lkmdsa',
			adressTo: 'sdkhfdkslj l;jdsf;kj ;fdks'
		},
	]

	settings = [
		{
			title: 'Login',
			route: '/user/login',
			img: '~/assets/images/settings.png'
		}
	];

	constructor(private homeService: HomeService, private page: Page) { }

	ngOnChanges(changes): void {
		if(changes){
			console.log(changes)
			console.log(Screen.mainScreen.widthDIPs)
		}
	}

	ngOnInit() {

		this.page.actionBarHidden = true;
		
		// the fab button and the main scrollView
		this.btnFab = this.page.getViewById("fab");
		/* this.btnAddress = this.page.getViewById("adress");
		this.btnOrder = this.page.getViewById("order"); */
		this.absolute =  this.page.getViewById("absolute");
		
		this.scroll.width = Number(Screen.mainScreen.widthDIPs);
		this.scroll.height = Number(Screen.mainScreen.heightDIPs) * 0.6;

		console.log()
		
		this.btnFab.top = this.scroll.height - 155;
		this.btnFab.left = this.scroll.width -  240 ;
/* 
		this.btnAddress.top = Screen.mainScreen.heightDIPs - 600;
		this.btnAddress.left = Screen.mainScreen.widthDIPs - 150;


		this.btnOrder.top = Screen.mainScreen.heightDIPs - 520;
		this.btnOrder.left = Screen.mainScreen.widthDIPs - 180; */




	}

	click() {
		this.addMenu = !this.addMenu;
	}
}