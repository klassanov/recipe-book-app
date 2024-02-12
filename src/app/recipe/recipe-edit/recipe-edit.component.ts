import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id']) {
            this.recipe = this.recipeService.getRecipe(+params['id']);
            this.editMode = true;
          }
          else {
            this.recipe = new Recipe(0, '', '', '', []);
          }
        });
  }

}
