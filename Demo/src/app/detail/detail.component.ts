import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Hero } from '../Hero'
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getHero();
  }
  goBack(): void {
    this.location.back();
  }


  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
    

  }
  save():void{
    if(this.hero!= undefined){
      this.heroService.changeName(this.hero).subscribe();
    }
    
  }
  
}
