import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] =[
    new Recipe('Test recipe', 'Delicious test recipe', 'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg'),
    new Recipe('Test Recipe 2', 'Another delicious test recipe', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];
}
