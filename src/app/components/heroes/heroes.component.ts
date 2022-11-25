import { Component } from '@angular/core';
import { Hero } from 'src/app/interface/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Hero[] = [];

  constructor(
    private heroService:HeroService
  ){}

  ngOnInit(): void { 
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  } 
}
