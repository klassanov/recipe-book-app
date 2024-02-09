import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./models/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){
       
    }

    private recipes: Recipe[] = [
        new Recipe(
            1,
            'Test recipe',
            'Delicious test recipe',
            'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Milk', 3),
                new Ingredient('Flower', 4),
            ]),
        new Recipe(2, 
         'Test Recipe 2',
         'Another delicious test recipe',
          'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
          [
                new Ingredient('Eggs', 2),
                new Ingredient('Salt', 3),
                new Ingredient('Oil', 4),
          ])
    ];


    getRecipes() {
        //Return a copy of the array
        return this.recipes.slice();
    }

    addRecipeIngredientsToShoppingList(recipe: Recipe): void{
        this.shoppingListService.addIngredients(recipe.ingredients)
    }

    getRecipe(id: number): Recipe{
        return this.recipes.find(r=>r.id==id);
    }


}