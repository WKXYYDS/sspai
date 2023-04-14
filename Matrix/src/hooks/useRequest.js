import axios from "axios";

// 定位城市
export const requestCitiesGuess = function () {
    return axios.get("/elm/v1/cities", {
        params: {
            type: "guess"
        }
    })
}