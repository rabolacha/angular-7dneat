import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  constructor(private petService: PetsService) { }

  ngOnInit() {
    this.getPets();
  }
  getPets(): void {
    this.pets = this.petService.getPets();
  }

}