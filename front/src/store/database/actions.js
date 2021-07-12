import axios from 'axios'

export default {
    async CREATE_DATABASE({ state }){
        try {
           // const res =  await axios.post('http://localhost:5000/api/database/create', state.json);
            console.log(state.json)
        } catch (e) {
            console.log(e.response)
        }
    }
}