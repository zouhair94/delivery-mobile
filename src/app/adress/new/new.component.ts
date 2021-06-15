import { Component, OnInit } from '@angular/core';
import { Page, Device,  } from '@nativescript/core'
import { IAddress } from '../IAdress';
import { registerElement } from "@nativescript/angular";
registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
@Component({
	moduleId: module.id,
	selector: 'new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

	adress: IAddress;
	htmlString: string 
	currentLat: any;
	currentLng: any;

	constructor(private page: Page) { }

	ngOnInit() { 
		this.page.actionBarHidden = true;
		this.adress.title = ""
		this.adress.address = ""
		this.adress.province = "Casablanca"
		this.adress.city = "Casablanca"
		this.htmlString = `<span>
		<h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1>
	 </span>`;
	}

	onMapReady(args: any) {
        args.map.setCenter(
            {
                lat: this.currentLat, // mandatory
                lng: this.currentLng, // mandatory
                animated: true, // default true
                zoomLevel: 14
            }
        )
    }
}