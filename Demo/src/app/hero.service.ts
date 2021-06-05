import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Hero, HEROES} from './Hero'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/Hero_arr';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    /** GET heroes from the server */

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)

    }
    getHeroById(id:number): Observable<Hero>{
      const url = `${this.heroesUrl}/${id}`;

      return  this.http.get<Hero>(url);
    }
    addHero(name: string):Observable<any>{
      let MaxId:number = HEROES.length;


      return this.http.put(this.heroesUrl, 
              new Hero(MaxId,name,'',new Date())
              , this.httpOptions
        )
    }

    delHero(id: number): Observable<Hero>{
      const url = `${this.heroesUrl}/${id}`;
      console.log(this.messageService.messages);
      return this.http.delete<Hero>(url, this.httpOptions);
    }
    changeName(hero:Hero): Observable<any>{

      return this.http.put(this.heroesUrl, hero, this.httpOptions);
    }
 
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
     this.messageService.add(`HeroService: ${message}`);
    }
}
