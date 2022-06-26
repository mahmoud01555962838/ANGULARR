import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food'; 
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All"?
     this.getAll(): this.getAll().filter(food=> food.tags?.
      includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name: 'All',count:8},
      {name: 'FastFood',count:4},
      {name: 'Pizza',count:2},
      {name: 'Lunch',count:3},
      {name: 'SlowFood',count:2},
      {name: 'Humburger',count:1},
      {name: 'Fry',count:1},
      {name: 'Soup',count:1},
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Burger1',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Humburger', 'Lunch'],
      },
      {
        id: 2,
        name: 'shawrma',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['china', 'us'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'potatoes&meat',
        cookTime: '30-40',
        price: 50,
        favorite: true,
        origins: ['france', 'belgium'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 4,
        name: 'Burger2',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['italy', 'germany'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Bizzahut',
        cookTime: '20-40',
        price: 30,
        favorite: false,
        origins: ['italy', 'spain'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Bizzacheese',
        cookTime: '25-35',
        price: 25,
        favorite: true,
        origins: ['italy', 'spain'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pizza',
        cookTime: '15-25',
        price: 30,
        favorite: true,
        origins: ['italy', 'egypt'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Food',
        cookTime: '15-20',
        price: 15,
        favorite: true,
        origins: ['china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['FastFood', 'Lunch'],
      },
    ];
  }
}
