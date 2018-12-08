
import axios from "axios";

import { Constants } from "expo";

const { manifest } = Constants;
const apiHost =
    typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
        ? 'http://' + manifest.debuggerHost
            .split(`:`)
            .shift()
            .concat(`:3030`)
        : `https://wfive.herokuapp.com/`;

export default {
    // Gets all Maps
    submitForm: (formData) => {
        //if ofrm data received value
        //post into database since no db then
        console.log(formData)
        return Promise.resolve()
    },
    // Saves a location to the database
    saveLocation: (mapData, comments, photo, email, projectName) => {
        let latitude = mapData.coords.latitude;
        let longitude = mapData.coords.longitude;
        let date = new Date(mapData.timestamp);
        let endPoint = apiHost + "/api/maps/"

        console.log("\n")
        console.log(`Latitude: ${latitude}`)
        console.log(`Longitude: ${longitude}`)
        console.log(`Timestamp: ${date}`)
        console.log(`Endpoint ${endPoint}`)
        console.log(`comments: ${comments}`)
        console.log(`photo ${photo}`);
        console.log(`email: ${email}`)
        console.log(`project ${projectName}`);
        //return axios.post("/", mapData);

        axios.post(endPoint, {
            latitude: latitude,
            longitude: longitude,
            date: date,
            comments: comments,
            photo: photo,
            email: email,
            projectName: projectName

        })
            .then(function (response) {
                console.log(response.data);
                console.log("Saved to Database");
            })
            .catch(function (error) {
                console.log("error reached")
                console.log(error);
            });


    },

    getProject: (value) => {
        let endPoint = apiHost + "/api/projects/projectexists"

        return axios.post(endPoint, {
            projectName: value
        }).then(response => {
            return response.data
        }).catch(error => {
            console.log(error)
        })
    }

};
