import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes:Recipe[]=[new Recipe("test Recipe","This is a simple test","https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Veggie-swirl-4a99ef8.jpg?quality=90&webp=true&resize=375,341"),
  new Recipe("test Recipe","This is a simple test","https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Veggie-swirl-4a99ef8.jpg?quality=90&webp=true&resize=375,341")];

}
