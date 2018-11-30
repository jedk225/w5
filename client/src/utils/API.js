import axios from "axios";

    // Gets all Maps
const submitForm = (formData) => {
        //if ofrm data received value
        //post into database since no db then
        console.log(formData)
        return Promise.resolve()
    }

const createProject =  (projectData) => {
        return axios.post("/api/projects", projectData)
    }

export { submitForm, createProject }


