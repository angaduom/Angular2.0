import { Component , Input } from '@angular/core';
import {Hero} from './heroes.component';


@Component({
	selector : 'hero-detail',
	template: `
	<div *ngIf = "hello">
	<input [(ngModel)] = "hello.name" placeholder="sup"/>
	</div>
	`
})

export class HeroDetailComponent{
	@Input()
	hello : Hero
	//This specifys what can be given as input to this component
	// THis is kind of cool lets see if I can get 
	// two inputs
}