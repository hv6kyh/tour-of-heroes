import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './DTO/hero.dto';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('히어로 목록 불러오기');
    return this.http.get<Hero[]>('/assets/mock-heroes.json');
  }
}
