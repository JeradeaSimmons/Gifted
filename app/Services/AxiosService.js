export const giftsApi = new axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs', // maybe neeed this? api/random
    timeout: 4000
})