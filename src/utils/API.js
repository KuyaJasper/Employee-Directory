import axios from "axios";

const randomPerson = "https://randomuser.me/api/?results=100nat=us";

export default {
    getRandomUser: function() {
        return axios.get(randomPerson);
    }
};