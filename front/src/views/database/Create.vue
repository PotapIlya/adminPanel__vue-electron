<template>
    <div>
        <h1>Create database</h1>

        <v-text-field
                label="Название базы данных"
                :rules="rules"
                hide-details="auto"
                v-model="inputName"
        />


        <DropDown />

    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import DropDown from "../../components/pages/database/DropDown";
export default {
    name: "CreateDatabase",
    components: {
        DropDown
    },
    data: () => ({
        inputName: '',
        rules: [
            value => !!value || 'Поле обязательное',
            // value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),
    watch: {
        GET_STATUS_BUTTON(){
            this.SET_JSON_NAME(this.inputName)
        }
    },
    computed: {
        ...mapGetters('database', ['GET_STATUS_BUTTON'])
    },
    methods: {
        ...mapMutations('database', ['SET_JSON_NAME'])
    },
}
</script>
