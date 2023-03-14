import { Component, OnInit } from '@angular/core';
import foodDb from '../../../assets/db/food.json';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tempObj = foodDb;

headers: Array<string>=["I have stuff", "I am filler and stuff", "Looky at what I made"]
  constructor() { }

  ngOnInit(): void {


  }

}
