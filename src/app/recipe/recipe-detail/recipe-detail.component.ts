import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

    @Input() selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService){

    }

    onAddToShoppingList(): void{
      this.recipeService.addRecipeIngredientsToShoppingList(this.selectedRecipe);
    }
}
