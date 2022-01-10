import axios from "axios";

const baseUrl = process.env.VUE_APP_API_BASE_URL;

export default {

    getHeaders(){
        return {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }
    },

    async getAllUsers(){

        let response;
        try{
            response =  await axios.get(`${baseUrl}/UserManagment`, this.getHeaders())
        }
        catch(error){
            response = error.response
        }

        return {
            success: response.data["success"],
            message: response.data["message"],
            users: response.data["data"]["users"]
        }
    },

    async getUsersByRole(role){

        let response;
        try{
            response =  await axios.get(`${baseUrl}/UserManagment/${role}`, this.getHeaders())
        }
        catch(error){
            response = error.response
        }

        return {
            success: response.data["success"],
            message: response.data["message"],
            users: response.data["data"]["users"]
        }
    },

    async getUsersBySearch(role, search){

        let response;
        try{
            response =  await axios.get(`${baseUrl}/UserManagment/${role}/${search}`, this.getHeaders())
        }
        catch(error){
            response = error.response
        }

        return {
            success: response.data["success"],
            message: response.data["message"],
            users: response.data["data"]["users"]
        }
    },

    async upgradeUser(id){

        let response;
        try{
            response =  await axios.put(`${baseUrl}/UserManagment/upgrade/${id}`, null, this.getHeaders())
        }
        catch(error){
            response = error.response
        }

        return {
            success: response.data["success"],
            message: response.data["message"]
        }
    },

    async downgradeUser(id){

        let response;
        try{
            response =  await axios.put(`${baseUrl}/UserManagment/downgrade/${id}`, null, this.getHeaders())
        }
        catch(error){
            response = error.response
        }

        return {
            success: response.data["success"],
            message: response.data["message"]
        }
    }
}