import { ProxyState } from "../AppState.js";
import { giftsApi } from "./AxiosService.js";

class GiftsService {

    async getGifts() {
        const res = await giftsApi.get('/gifts')
        console.log(res.data)
    }
}

export const giftsService = new GiftsService()