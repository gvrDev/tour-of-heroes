import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interface/hero.interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:3000/hero';
  
  getHeroes = (): Observable<Hero[]> => {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero = (id: string): Observable<Hero> => {
    const newUrl = this.heroesUrl + `/${id}` ;
    return this.http.get<Hero>(newUrl)
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
}
