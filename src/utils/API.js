import axios from "axios";

const randomPerson = "https://randomuser.me/api/?results=75&nat=us";

export default {
    getRandomUser: function() {
        return axios.get(randomPerson);
    }
};