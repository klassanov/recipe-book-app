import { Recipe } from "./models/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'Delicious test recipe', 'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg'),
        new Recipe('Test Recipe 2', 'Another delicious test recipe', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
    ];


    getRecipes(){
        //Return a copy of the array
        return this.recipes.slice();
    }


}