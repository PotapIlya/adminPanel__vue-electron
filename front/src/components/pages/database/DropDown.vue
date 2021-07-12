<template>
    <div>
        <div class="wrapper">
            <h2>Поля в базе данных</h2>
            <v-btn depressed color="primary" @click="addItem">Добавить поле</v-btn>
        </div>

        <DropDownItem
                v-for="(item, idx) in GET_ARRAY_ITEMS"
                :key="idx"
                :item="item"
                :idx="idx"
        />

        <v-btn class="btnSave" depressed color="primary" @click="saveDatabase">Создать базу</v-btn>

    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import DropDownItem from "./DropDownItem";
export default {
    name: "DropDown",
    components: {
        DropDownItem
    },
    data: () => ({

    }),
    computed: {
        ...mapGetters('database', ['GET_ARRAY_ITEMS'])
    },
    methods: {
        ...mapMutations('database', ['ADD_ARRAY_ITEMS', 'SET_STATUS_BUTTON']),
        ...mapActions('database', ['CREATE_DATABASE']),
        addItem(){
            this.ADD_ARRAY_ITEMS();
        },
        saveDatabase(){
            this.SET_STATUS_BUTTON();
            this.CREATE_DATABASE();
        }
    }
}
</script>

<style scoped>
    .btnSave{
        margin-top: 30px;
    }
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    input{
        border: 1px solid #000;
        font-size: 16px;
        padding: 8px;
    }
    select{
        border: 1px solid #000;
    }
    h2 {
        margin-top: 30px;
        margin-bottom: 10px;
    }
</style>