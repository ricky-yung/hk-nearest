import HkGovDataBaseRepository from "./HkGovDataBaseRepository";

export default {
    get(lat, long, max = 100) {
        return HkGovDataBaseRepository.get(`/v1/nearest-schools?lat=${lat}&long=${long}&max=${max}`)
    }
}