import { ProxyState } from "../AppState.js";
import { giftsApi } from "./AxiosService.js";

class GiftsService {

    const res = await giftsApi.put(`gifts/${ProxyState.player.id}`, ProxyState)
    console.log('put request for gifts', res.data);

}

export const giftsService = new GiftsService()