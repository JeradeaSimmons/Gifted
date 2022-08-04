import { ProxyState } from "../AppState.js";
import { giftsApi } from "./AxiosService.js";

class GiftsService {
    async getGifts(search) {
        const res = await giftsApi.get('search', {
            params: {
                api_key: 'd6R0Hp1EFwqfprjmf1YyCnd8aVlz2Bm9',
                rating: 'pg',
                q: search
            }
        })
        console.log('Get gifts', res.data);

    }

}

export const giftsService = new GiftsService()