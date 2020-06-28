import { Component, OnInit } from '@angular/core';
import { Hero } from '../DTO/hero.dto';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero = null;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(hero.name + ' 선택하였음');
  }
}
