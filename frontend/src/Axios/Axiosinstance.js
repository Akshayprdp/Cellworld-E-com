import axios from "axios"

const userInstance=axios.create({baseURL:"http://localhost:4000"})

const adminInstance=axios.create({baseURL:`${"http://localhost:4000"}/admin`,})

// const Hostedapiinstance=axios.create({baseURL:"https://cell-e-world-backend.onrender.com"})









export{userInstance,adminInstance}