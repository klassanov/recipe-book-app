import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {

  selectedRecipe: Recipe;

  onRecipeClicked(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
