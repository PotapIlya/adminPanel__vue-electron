<template>
    <div v-if="item" class="wrapper">
        {{ idx }}
        <label for="">
            <input v-model="inputName" placeholder="Название поля" type="text">
        </label>

        <label v-if="typeInput.length" for="">
            <select v-model="inputType" name="" id="">
                <span>Тип поля</span>
                <option v-for="item in typeInput" :value="item">{{ item }}</option>
            </select>
        </label>

        <label for="">
            <span>Null</span>
            <input v-model="inputCheckbox" type="checkbox">
        </label>

        <v-btn depressed color="error" @click="deleteItem">Delete</v-btn>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "DropDown",
    props: {
        item: {
            type: Object,
            default: null
        },
        idx: {
            type: Number,
        }
    },
    computed: {
        ...mapGetters('database', ['GET_STATUS_BUTTON'])
    },
    data: () => ({
        typeInput: [ 'INT', 'VARCHAR', 'TEXT', 'DATE' ],

        inputName: '',
        inputType: null,
        inputCheckbox: false
    }),
    watch: {
        GET_STATUS_BUTTON(){
            this.statusBg = true;
            this.SET_ARRAY_ITEMS({
                id: this.idx,
                inputName: this.inputName,
                inputType: this.inputType,
                inputCheckbox: this.inputCheckbox
            })
        }
    },
    mounted() {
        this.inputName = this.item.inputName;
        this.inputType = this.item.inputType;
        this.inputCheckbox = this.item.inputCheckbox;
    },
    methods: {
        ...mapMutations('database', ['SET_ARRAY_ITEMS']),
        deleteItem(){
            //
        }
    }
}
</script>

<style scoped>
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