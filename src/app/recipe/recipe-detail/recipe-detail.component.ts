import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addRecipeIngredientsToShoppingList(this.recipe);
  }

  onEditRecipe() {
    //Way 1
    //this.route.navigate(['edit'], { relativeTo: this.activatedRoute });

    //Another way 2 -> going up one level
    //this.route.navigate(['../', this.recipe.id, 'edit'], { relativeTo: this.activatedRoute });

    //Another way 3 -> absolute url
    this.route.navigate(['recipes', this.recipe.id, 'edit']);
  }
}
