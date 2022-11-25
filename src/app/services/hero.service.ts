import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero.interface';
import { HEROES } from '../mock/heroes.mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes = (): Observable<Hero[]> => {
    const heroes = of(HEROES);
    this.messageService.add('Finished loading heroes list');
    return heroes;
  }

  getHero = (id: number): Observable<Hero> => {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
