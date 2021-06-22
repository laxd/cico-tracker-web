// Create API methods here
import {formatDate} from "./Date";
import axios from "axios";

export class CicoApi {

    constructor(config) {
        this.baseUrl = config.baseUrl

        this.axios = axios.create({
            baseURL: this.baseUrl
        })
    }

    async getRecordings(options) {
        return this.axios.get("/recordings")
            .then((results) => {
                return results.data
            })
    }

    async getRecordingsBetween(start, end) {
        return this.axios.get("/recordings", {
            params: {
                from: formatDate(start),
                to: formatDate(end)
            }
        }).then((results) => {
            return results.data
        })
    }

    async getStats(from, to) {
        return this.axios.get("/recordings/stats", {
            params: {
                from: formatDate(from),
                to: formatDate(to)
            }
        }).then((results) => {
            return results.data
        })
    }

}