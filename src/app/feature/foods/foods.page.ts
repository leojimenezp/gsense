import { Component, OnInit } from '@angular/core';
import { FoodService } from '@shared/services/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  public listTypeFoods: any;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.getTypeFood();
  }

  public getTypeFood() {
    this.foodService.getTypeFood().subscribe(response => {
      this.listTypeFoods = response;
    })

  }

}
