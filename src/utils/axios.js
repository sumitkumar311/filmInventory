import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTdiMGQxN2EyNWEwZmU4OWVhNmJkMjM4NjdmMjdkYSIsIm5iZiI6MS43NDY2MzcwOTc3ODU5OTk4ZSs5LCJzdWIiOiI2ODFiOTEyOTE3ZjZkZmM3ZGM5ZjA2MDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9SIzntHU6bywQ9Wg70iKrRSyTimSZzF5lW-wy_2XBIg"
    }
})
export default instance;