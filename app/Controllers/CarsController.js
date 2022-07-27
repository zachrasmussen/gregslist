import { ProxyState } from "../AppState.js";
import { carsForm } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



function _drawCars() {
  let template = ''
  let cars = ProxyState.cars
  cars.forEach(c => template += c.Template)
  // console.log('drawing cars', template)
  document.getElementById('listings').innerHTML = template
}

function test() {
  console.log('listener triggered');
}

function _drawForm() {
  let template = ''
  template += carsForm
  document.getElementById('forms').innerHTML = template
}


export class CarsController {
  constructor() {
    // NOTE register a listener. below is listens to 'cars' on the proxystate, and when triggerd runs '_drawCars'
    ProxyState.on('cars', _drawCars)
    ProxyState.on('cars', saveState)
    ProxyState.on('cars', test)
    loadState()
    _drawCars()
  }

  viewCars() {
    _drawCars()
    _drawForm()
  }

  createCar() {
    console.log('car form submitted');
    // NOTE window.event.preventDefault grabs the submit event from the form submit and keeps the page from refreshing
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    }
    carsService.createCar(newCar)
    form.reset()
    // NOTE replaced by listeners in constructor
    // _drawCars()
  }

  deleteCar(id) {
    console.log('deleteing', id);
    carsService.deleteCar(id)
  }
}