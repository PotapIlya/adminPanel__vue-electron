export default {
    GET_ARRAY_ITEMS: state => {
        return state.json.columns
    },
    GET_STATUS_BUTTON: state => {
        return state.statusButton;
    }
}