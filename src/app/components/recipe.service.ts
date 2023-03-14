import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
currentRecipe: any = "";

  constructor() { }

setCurrentRecipe(recipe: any){
  this.currentRecipe = recipe;

}

getCurrentRecipe(){
  return this.currentRecipe;
}

}
