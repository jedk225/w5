// import axios from "axios"

// export default{

// }
import axios from "axios";

export default {
    // Gets all Maps
    submitForm: (formData) => {
        //if ofrm data received value
        //post into database since no db then
        console.log(formData)
        return axios.post("/api/App", formData)
        
        //return Promise.resolve()
    }

};
