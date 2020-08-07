import { Injectable } from '@angular/core';
import { Hero } from '../interface/Hero';
import { heroesMock } from '../mock/mock.hero';
import { MessageService } from './message.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  public getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(heroesMock);
  }

  public getHero(id: number) {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(heroesMock.find(hero => hero.id === id));
  }
}
