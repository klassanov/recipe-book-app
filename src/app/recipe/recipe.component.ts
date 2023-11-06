import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  selectedRecipe: Recipe;

  onRecipeClicked(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
