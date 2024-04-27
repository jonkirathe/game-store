import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "51026f811bf743ca81a8867275dd9c91",
    },
})

export {CanceledError}