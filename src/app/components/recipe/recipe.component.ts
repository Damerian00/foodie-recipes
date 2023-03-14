import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: any = "";
  constructor(private reService : RecipeService) { }

  ngOnInit(): void {
    this.recipe = this.reService.getCurrentRecipe();

  }

}
