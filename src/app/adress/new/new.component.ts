import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '@nativescript/core'
import { IAddress } from '@/app/shared/models';
import * as geocoding from '@nativescript-community/geocoding';
import { registerElement } from "@nativescript/angular";
import { Mapbox, MapboxViewApi, MapboxMarker } from '@nativescript-community/ui-mapbox';
registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
@Component({
    moduleId: module.id,
    selector: 'new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {


    edit: String ;
     
    //data
    adress: IAddress = {
        title: '',
        address: ''
    };

    //location
    currentLat: any;
    currentLng: any;

    location = new geocoding.Location();

    //map variables
    Map: MapboxViewApi;
    Marker: MapboxMarker;

    constructor(private page: Page,private router: ActivatedRoute) { }

    ngOnInit() {

        this.page.actionBarHidden = true;
        this.edit = this.router.snapshot.paramMap.get('edit');
        if(this.edit){

            console.log('make data editable')
        }

    }

    updateLocation(args) {
        console.dir(args);

    }

    async onSubmit() {

        const Adress = `${this.adress.address},Casablanca Morocco`;
  

        geocoding.getLocationListFromName(Adress, 1).then(
            (locations) => {
                console.log('Found ', locations.length);
                if (locations.length > 0) {
                    this.location = locations[0];
                    const marker = <MapboxMarker>{
                        lat: this.location.latitude,
                        lng: this.location.longitude,
                        selected: true

                    };
                    this.Map.addMarkers([marker]);
                    this.Map.animateCamera({
                        target: {
                            lat: this.location.latitude,
                            lng: this.location.longitude,
                        },
                    });
                    this.adress.lat = this.location.latitude;
                    this.adress.lng = this.location.longitude;
                }
            },
            function (e) {
                console.log('Error: ' + (e.message || e));
            }
        );
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