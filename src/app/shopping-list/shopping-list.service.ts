import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    //Even without argument it can work Ingredient[]: I can simpy subscribe to the event and then call getIngredients and reload them
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}