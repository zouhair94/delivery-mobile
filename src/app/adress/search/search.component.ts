import { Component, OnInit } from '@angular/core';
import { Page, SearchBar,  ScrollView } from '@nativescript/core';
import {Icons} from '@/app/shared/components/icons';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

	searchPhrase: string
	icons = Icons;
	title: string;
	constructor(private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.title = 'Search in address list';
	 }
}