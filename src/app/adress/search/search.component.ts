import { Component, OnInit } from '@angular/core';
import { Page, SearchBar,  ScrollView } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

	searchPhrase: string

	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
	 }
}