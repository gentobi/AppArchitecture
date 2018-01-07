import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	minDate = new Date(2000, 0, 1);
	maxDate = new Date(2029, 11, 31);
	currentDate = new Date();
}
