import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Honda', model: 'CRV3-XL PLUS', year: 2023, price: 100000, img: 'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future' }),
    new Car({ make: 'Tesla', model: 'Cyber truck', year: 3000, price: 5, img: 'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description: 'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.' })
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({ bedroom: 4, bathroom: 2, sqft: 1500, price: 350, img: 'https://photos.zillowstatic.com/fp/69f5adc3f3f30152f92440db67eb3834-cc_ft_1536.webp' }),
    new House({ bedroom: 5, bathroom: 4, sqft: 4250, price: 700, img: 'https://photos.zillowstatic.com/fp/ee95c2297e5b28710233505589fec5ec-cc_ft_1536.webp' })
  ]
}





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
