export default {
    ADD_ARRAY_ITEMS(state){
        state.json.columns.push({
            inputName: '',
            inputType: 'INT',
            inputCheckbox: false,
        })
    },
    SET_ARRAY_ITEMS(state, data){
        state.json.columns[data.id] = {
            inputName: data.inputName,
            inputType: data.inputType,
            inputCheckbox: data.inputCheckbox,
        }
    },
    SET_JSON_NAME(state, name){
        state.json.name = name;
    },
    SET_STATUS_BUTTON(state){
        state.statusButton = !state.statusButton;
    }
}