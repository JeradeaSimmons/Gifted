import { ProxyState } from "../AppState.js";
import { giftsApi } from "./AxiosService.js";

class GiftsService {
    async getGifts() {
        const res = await giftsApi.get('api/', {
            params: {
                api_key: 'd6R0Hp1EFwqfprjmf1YyCnd8aVlz2Bm9',
                rating: 'pg',
                q: ''
            }
        })
        console.log('Get gifts', res.data);

    }

}

export const giftsService = new GiftsService()