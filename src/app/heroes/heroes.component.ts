import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero';
import { heroesMock } from '../mock/mock.hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = heroesMock;
  public selectedHero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
