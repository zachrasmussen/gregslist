import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { housesForm } from "../Models/House.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  // GET THE HOUES TEMPLATE
  document.getElementById('listings').innerHTML = template
}

function _drawForm() {
  let template = ''
  template += housesForm
  document.getElementById('forms').innerHTML = template
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded')
    ProxyState.on('houses', _drawHouses)
    ProxyState.on('houses', saveState)
    // ProxyState.on('houses', test)
    loadState()
    _drawHouses()
  }


  viewHouses() {
    _drawHouses()
    _drawForm()
  }

  createHouse() {
    console.log('house form submitted');
    // NOTE window.event.preventDefault grabs the submit event from the form submit and keeps the page from refreshing
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newHouse = {
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      sqft: form.sqft.value,
      price: form.price.value,
      img: form.img.value,
    }
    housesService.createHouse(newHouse)
    form.reset()
  }

  deleteHouse(id) {
    console.log('deleteing', id);
    housesService.deleteHouse(id)
  }
}
