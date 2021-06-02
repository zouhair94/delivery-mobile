import { Component, Input, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular'

@Component({
	moduleId: module.id,
	selector: 'floating-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	@Input() disp = true;
	
	constructor(private router: RouterExtensions) { }

	ngOnInit() { }

	addNewAdress() {
		this.router.navigateByUrl('/address/new')
	}
}