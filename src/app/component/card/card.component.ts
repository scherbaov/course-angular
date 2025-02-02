import { Component } from '@angular/core';
import { UserType } from '../card.type';
import { JsonPipe } from '@angular/common';



const userArr:Array<UserType> = [
  {id: 1, name: 'Joy', age: 30},
  {id: 2, name: 'Joy2', age: 40},
  {id: 3, name: 'Joy3', age: 50, surname: 'qwerty'},
  {id: 4, name: 'Joy4', age: 60},
  {id: 5, name: 'Joy5', age: 70}
]


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  user: Array<UserType> = []


  constructor() {
    this.user = userArr;
  }

}
