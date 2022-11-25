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
  constructor(private messageService: MessageService) { }
}
