export default {
    ADD_ARRAY_ITEMS(state){
        state.json.columns.push({
            inputName: '',
            inputType: 'INT',
            inputCheckbox: false,
        })
    },
    SET_ARRAY_ITEMS(state, data){
        state.json.columns.forEach((item, idx) => {
            if (idx === data.id) {
                item.inputCheckbox = data.inputCheckbox;
                item.inputName = data.inputName;
                item.inputType = data.inputType;
            }
        });
    },
    SET_JSON_NAME(state, name){
        state.json.name = name;
    },
    SET_STATUS_BUTTON(state){
        state.statusButton = !state.statusButton;
    }
}