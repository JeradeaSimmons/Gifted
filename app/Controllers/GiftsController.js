import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";



function _drawGifts() {
    let template = ''
    ProxyState.gifts.forEach(g => template += g.Template)
    document.getElementById('giftedForm').innerHTML = template
}



export class GiftsController {
    constructor() {
        ProxyState.on('gifts', _drawGifts)
    }
}