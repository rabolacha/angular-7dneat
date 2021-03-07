import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PetsService } from '../pets.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private petService: PetsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  verifica(input):void{
   const pets = this.petService.getPets();
   let encontrou = false;

   for(let pet of pets){
     console.log(pet.name)
     if(input == pet.name){
       this.save();
       encontrou = true;
       break;
     }
   }
   if(!encontrou){
     alert("o pet não existe");
   }
   console.log(input); 
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/