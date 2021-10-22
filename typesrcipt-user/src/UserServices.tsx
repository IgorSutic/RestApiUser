// import React, { useRef } from "react";
import axios from "axios";
import { User } from "./models/models";

export const fetchReactUser = async () : Promise<User[]> => {
    
    const endpoint = `http://127.0.0.1:8000/viewset/`
    const data = await (await fetch(endpoint)).json();
    
    return data;
}

export const createUser = async (
    name:string
) => {
    
    const endpoint = `http://127.0.0.1:8000/viewset/`
    const axios = require('axios');
    
    await axios.post(endpoint, {
        name: name
    })
    .then(function (response: any) {
    })
    .catch(function (error: any) {
        console.log(error);
    });

}

export const deleteUser = async (id:number) => {
    const endpoint = `http://127.0.0.1:8000/viewset/${id}`
    await fetch(
        endpoint, 
        {  method: "DELETE"}
        ).then(
            response => {  
                console.log(response.status); 
        });
}
