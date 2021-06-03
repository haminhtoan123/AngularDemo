import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Hero, Heroes} from './Hero'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // private heroesUrl = 'api/heroes';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    /** GET heroes from the server */
    // getHeroes(): Observable<Hero[]> {
    //   return this.http.get<Hero[]>(this.heroesUrl)
    //     .pipe(
    //       tap(_ => this.log('fetched heroes')),
    //       catchError(this.handleError<Hero[]>('getHeroes', []))
    //     );
    // }  
    getHeroes(): Hero[]{
      return Heroes
    }
    getHeroById(id:number):any{
      console.log(Heroes);
      return Heroes.filter( x => x.id === id) ;
    }
    addHero(name: string):void{
      let MaxId:number = Heroes.length;
      Heroes.push(new Hero(MaxId,name,'',new Date()))
    }
    delHero(id: number):void{
      Heroes.splice(id,1)
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
     this.messageService.add(`HeroService: ${message}`);
    }
}
