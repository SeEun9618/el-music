import axios from "axios";

const TIME_OUT = 4000;

const createAxios = (axiosConfig) => {
    return axios.create({ timeout: TIME_OUT, ...axiosConfig });
};

const httpClient = createAxios({
    baseURL: "https://itunes.apple.com/"
});


httpClient.defaults.headers.common['Accept'] = 'application/json';

export {httpClient};