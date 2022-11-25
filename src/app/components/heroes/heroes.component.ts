import { Component } from '@angular/core';
import { Hero } from 'src/app/interface/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Hero[] = [];

  selectedHero?:Hero;

  onSelect = (hero: Hero) => {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  }

  constructor(
    private messageService:MessageService,
    private heroService:HeroService
  ){}

  ngOnInit(): void { 
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  } 
}
