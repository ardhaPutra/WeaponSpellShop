import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(
      1, 
      'Kokorowatari lv. 1', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      444
    ),
    new Product(
      2, 
      'Kokorowatari lv. 2', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      555
    ),
    new Product(
      3, 
      'Enhanced Kokorowatari', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      500
    ),
    new Product(
      4, 
      'Rookie Kokorowatari', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      200
    ),
    new Product(
      5, 
      'Light Kokorowatari', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      300
    ),
    new Product(
      6, 
      'Medium Kokorowatari', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.', 
      450
    ),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO : Populate products from an API and return an Observable
    return this.products
  }
}
