import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },

    {
        path: 'recipes', component: RecipeComponent, children: [
            { path: '',    component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent},
        ]
    },

    { path: 'shopping-list', component: ShoppingListComponent },
];



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) //We configure the router module
    ],
    exports: [
        RouterModule //We export the configured router module
    ]
})
export class AppRoutingModule {
}