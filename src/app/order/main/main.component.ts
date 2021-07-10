import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { registerElement } from "@nativescript/angular";
import { Mapbox, MapboxViewApi, MapboxMarker } from '@nativescript-community/ui-mapbox';
registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);
@Component({
	moduleId: module.id,
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	//map variables
    Map: MapboxViewApi;
    Marker: MapboxMarker;

	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true

	 }

	 onMapReady(args: any) {
        this.Map = args.map;
  
        args.map.setCenter(
            {
                animated: true, // default true
                zoomLevel: 14
            }
        );
        
    }
}