import axios from "axios";

export default axios.create({
    baseURL: "http://facebook.com",
    // headers: {
    //     Authorization: "Bearer "  
    // }
})