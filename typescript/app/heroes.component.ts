import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
	selector : 'my-heroes',
	template : `
	<div class="header">
	<h1> {{Objective}}</h1>	
	</div>
	<div class="hero-name">
	<label>Name : </label>{{hero.name}}	
	</div>
	<div class="hero-power">
	<label>Power : </label>{{hero.power}}	
	</div>
	<input [(ngModel)]="hero.name" placeholder="name">

	<div>
	This is all cool but lets try and get something that can be
	iterated over, we generally do a map and return the variable 
	and then use is in the render function
	</div>
	<div>
		<ul>
			<li *ngFor="let hero of heros" (click)="onSelect(hero)">
				<div><input [(ngModel)] ="hero.name"></div>
				<div>{{hero.name}}</div> 	
			</li>
		</ul>
	</div>

	<div>
		<div *ngIf="selectedHero">
			<h2>You have selected : </h2>
			<h1>{{selectedHero.name}}</h1>
			<h2>As your oponent</h2>
		</div>

	</div>
<hero-detail [hello]="selectedHero"></hero-detail>
	`,
providers:[ HeroService]
})

export class HeroesComponent implements OnInit {

Objective  ='This is the first attempt: looking for router' ;

selectedHero:Hero;

heroes: Hero[];

constructor(private heroService: HeroService) { }

getHeroes(): void {
    this.heroes=this.heroService.getHeroes();
}

ngOnInit(): void {
    this.getHeroes();
}

hero : Hero = {
	name:'Robin',
	power : 'He is Batman',
	level : 10
	};

heros : Hero[]=[
	{
	name:'Batman',
	power : 'He is Batman',
	level : 10
	},
	{
	name:'Batman',
	power : 'He is Batman',
	level : 10
	},
	{
	name:'Batman',
	power : 'He is Batman',
	level : 10
	}];	

onSelect(hero:Hero): void{
	this.selectedHero=hero;
}

} 

export class Hero {
	name: string;
	power: string;
	level: number;
}

