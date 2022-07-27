import { generateId } from '../Utils/generateId.js'


export class Car {
  constructor({ make, model, year, price, img, description }) {
    this.id = generateId()
    this.make = make,
      this.model = model,
      this.year = year,
      this.price = price,
      this.img = img,
      this.description = description
  }

  // constructor(data){
  //   this.make = data.make,
  //   this.model = data.model,
  //   this.year = data.year, 
  //   this.price = data.price,
  //   this.img = data.img,
  //   this.description = data.description
  // }

  get Template() {
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} | ${this.model} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}


export const carsForm =
  `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.carsController.createCar()">
    <h3 class="text-primary">List Your Car</h3>
    <div class="row">
      <div class="col-6">
        <label class="form-label" for="make">Make</label>
        <input class="form-control" type="text" minlength="5" id="make" name="make">
      </div>
      <div class="col-6">
        <label class="form-label" for="model">Model</label>
        <input class="form-control" type="text" id="model" name="model">
      </div>
      <div class="col-6">
        <label class="form-label" for="year">Year</label>
        <input class="form-control" type="number" id="year" name="year">
      </div>
      <div class="col-6">
        <label class="form-label" for="price">Price</label>
        <input class="form-control" type="number" min="1" id="price" name="price">
      </div>
      <div class="col-12">
        <label class="form-label" for="img">Image</label>
        <input class="form-control" type="text" id="img" name="img">
      </div>
      <div class="col-12">
        <label class="form-label" for="description">Description</label>
        <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
        <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
      </div>
    </div>
  </form>
        `