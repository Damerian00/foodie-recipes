import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

@Input() cardObject: any;
enableQuickView: boolean = false;

  constructor(private reService: RecipeService) { }

  ngOnInit(): void {
  }

quickView(){
  this.enableQuickView = !this.enableQuickView;
}
fullView(){
  this.reService.setCurrentRecipe(this.cardObject);
  
}


}
