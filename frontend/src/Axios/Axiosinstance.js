import axios from "axios"

const userInstance=axios.create({baseURL:"http://localhost:4000"})

const adminInstance=axios.create({baseURL:`${"http://localhost:4000"}/admin`,})

// const Hostedapiinstance=axios.create({baseURL:"https://cell-e-world-backend.onrender.com"})


userInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem("jwt");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  });
  
  adminInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem("adminJWT");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  });






export{userInstance,adminInstance}