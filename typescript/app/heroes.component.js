"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.Objective = 'This is the first attempt: looking for router';
        this.hero = {
            name: 'Robin',
            power: 'He is Batman',
            level: 10
        };
        this.heros = [
            {
                name: 'Batman',
                power: 'He is Batman',
                level: 10
            },
            {
                name: 'Batman',
                power: 'He is Batman',
                level: 10
            },
            {
                name: 'Batman',
                power: 'He is Batman',
                level: 10
            }];
    }
    HeroesComponent.prototype.getHeroes = function () {
        this.heroes = this.heroService.getHeroes();
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n\t<div class=\"header\">\n\t<h1> {{Objective}}</h1>\t\n\t</div>\n\t<div class=\"hero-name\">\n\t<label>Name : </label>{{hero.name}}\t\n\t</div>\n\t<div class=\"hero-power\">\n\t<label>Power : </label>{{hero.power}}\t\n\t</div>\n\t<input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n\n\t<div>\n\tThis is all cool but lets try and get something that can be\n\titerated over, we generally do a map and return the variable \n\tand then use is in the render function\n\t</div>\n\t<div>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let hero of heros\" (click)=\"onSelect(hero)\">\n\t\t\t\t<div><input [(ngModel)] =\"hero.name\"></div>\n\t\t\t\t<div>{{hero.name}}</div> \t\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<div>\n\t\t<div *ngIf=\"selectedHero\">\n\t\t\t<h2>You have selected : </h2>\n\t\t\t<h1>{{selectedHero.name}}</h1>\n\t\t\t<h2>As your oponent</h2>\n\t\t</div>\n\n\t</div>\n<hero-detail [hello]=\"selectedHero\"></hero-detail>\n\t",
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=heroes.component.js.map