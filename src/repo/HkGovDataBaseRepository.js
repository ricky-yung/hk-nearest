import axios from "axios";

const BASE_URL = "https://api.data.gov.hk";

export default axios.create({
    baseURL: BASE_URL
});