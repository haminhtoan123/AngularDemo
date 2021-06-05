import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  choose: number = -1;
  message: string= '';
  nameInput: string ='';
  constructor(

    private heroService: HeroService,
    private router: Router 
    ) { }

  ngOnInit() {
    this.getHeroes();

  }
  clearNameInput():void{
    this.nameInput = '';
  }
  clearMessage():void{
    this.message = '';
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)

  }
  select(event: number): void{
    this.choose = event;
  }
  show():void{
      console.log(this)
  }
  add(name: string): void {
    if (!name) { return; }
    name = name.trim();
    this.heroService.addHero(name).subscribe(hero => {
      this.heroes.push(hero);
    });;
  }
  
  delete(dele:number): void {
    this.heroService.delHero(this.heroes[dele].id).subscribe();
    this.heroes.splice(dele,1);
  }



  gotoItem(){
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    let id :number;
    if (this.choose != -1){
        id = this.choose;
    }
    else { 
      this.message = "Choose A Hero first";
      return ;
    }
    this.router.navigate(['detail/'+ this.heroes[id].id]);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/