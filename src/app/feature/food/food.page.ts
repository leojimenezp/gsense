import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodModel } from '@shared/interfaces/food.interface';
import { FoodService } from '@shared/services/food.service';
import { Subject } from 'rxjs';
import { LoaderService } from '@shared/services/loader.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  public food: FoodModel = {};
  public file: File | null = null;
  public base64: any;
  public listFoods: any;
  public idTypeFood: number;
  public isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.idTypeFood = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getFood();
  }

  public getFood() {
    this.foodService.getFood().subscribe(response => {
      this.listFoods = response;
    })
  }

  public getFile(files: FileList | null) {
    if (files) {
      this.file = files.item(0);
      this.convertFileToBase64(this.file).then(
        data => this.base64 = data
      );
      this.food.foto = this.base64;
    }
  }

  public convertFileToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  public onSubmitFile() {
    this.food.idUsuario = 13;
    this.food.idTipocomida = this.idTypeFood;
    this.food.fecha = new Date().toISOString().slice(0, 10);
    this.foodService.createLogFood(this.food).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Comida registrada', 'success');
        this.food.foto = null
      }
    })
  }

  public onSubmit() {
    this.food.idUsuario = 13;
    this.food.idTipocomida = this.idTypeFood;
    this.food.idComida = Number(this.food.idComida);
    this.food.cantidad = Number(this.food.cantidad);
    this.food.fecha = new Date().toISOString().slice(0, 10);
    this.foodService.createLogFood(this.food).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Comida registrada', 'success');
        this.food.idComida = null;
        this.food.cantidad = null
      }
    })
  }

}
