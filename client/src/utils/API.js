import axios from "axios";


export default {
    // Gets all Maps
  submitForm: (formData) => {
        //if ofrm data received value
        //post into database since no db then
        console.log(formData)
        return Promise.resolve()
    },
    createProject: function(projectData) {
        return axios.post("/api/projects", projectData)
    }

};


