import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
 
import foodDb from '../../../assets/db/food.json';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tempObj = foodDb;
faEnvelope = faEnvelope;
faDove = faTwitter;
faGithub = faGithub;
faInsta = faInstagram;
headers: Array<string>=["Food Du'Jour", "Who we are?", "Available Recipes:"]
  constructor() { }

  ngOnInit(): void {


  }

}
