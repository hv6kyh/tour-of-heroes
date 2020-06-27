import { Component, OnInit } from '@angular/core';
import { Hero } from '../DTO/hero.dto';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
