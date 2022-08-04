export const giftsApi = new axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    timeout: 4000
})