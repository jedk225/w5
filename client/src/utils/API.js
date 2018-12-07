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
    },
   
    grabData: function(id) {
        console.log("Got to utils/API", id)
        let endPoint = "/" + id;
        console.log(endPoint, "<--endPoint")
        return axios.get(endPoint)
        
    },

    projectLookUp: function(packet){
        return axios.post("/api/projects/verify", packet)
    }

};


