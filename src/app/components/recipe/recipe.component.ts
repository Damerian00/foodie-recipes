import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import foodDb from '../../../assets/db/food.json';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any = ''
defaultRecipe = foodDb[0];
  constructor(private reService : RecipeService) { }

  ngOnInit(): void {
    
    this.recipe = (this.reService.getCurrentRecipe())?this.reService.getCurrentRecipe():this.defaultRecipe;

  }

}
