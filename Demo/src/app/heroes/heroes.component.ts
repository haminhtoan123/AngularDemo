import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  choose: number|undefined;
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()


  }
  select(event: number): void{
    this.choose = event;
  }
  show():void{
      console.log(this)
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero(name);
  }
  delete(dele:number): void {
    this.heroService.delHero(dele)

  }



  gotoItem(){
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['detail/'+ this.choose]);
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/