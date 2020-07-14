import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(h => this.heroes = [...h]);
  }
}
