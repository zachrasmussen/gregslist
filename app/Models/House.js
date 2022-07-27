import { generateId } from '../Utils/generateId.js'


export class House {
    constructor({ bedroom, bathroom, sqft, price, img }) {
        this.id = generateId(),
            this.bedroom = bedroom,
            this.bathroom = bathroom,
            this.sqft = sqft,
            this.price = price,
            this.img = img
    }

    get Template() {
        return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2">
                <img class="img-fluid" src="${this.img}" alt="">
                <div class="p-2"> 
                    <h4 class="text-center">${this.bedroom} | ${this.bathroom} | ${this.sqft}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti possimus neque quas,
                        dignissimos itaque at aspernatur.</p>
                    <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                    <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
                </div>
            </div>
        </div> `
    }
}

export const housesForm =
    `
        <form class="col-10 bg-white p-3 elevation-2">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-6">
              <label class="form-label" for="make">Bedroom</label>
              <input class="form-control" type="number" id="bedroom" name="bedroom">
            </div>
            <div class="col-6">
              <label class="form-label" for="model">Bathroom</label>
              <input class="form-control" type="number" id="bathroom" name="bathroom">
            </div>
            <div class="col-6">
              <label class="form-label" for="year">Sqft</label>
              <input class="form-control" type="number" id="sqft" name="sqft">
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
              <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
            </div>
          </div>
        </form>
        `

