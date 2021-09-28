<template>
    <div>
        <el-button @click="showModal=true">Добавить</el-button>
        <el-dialog
            title="Добавление пользователя"
            :visible.sync="showModal">
            <div>
                <div>
                    <span>Имя</span>
                    <el-input
                        v-model="nameInput"
                        clearable>
                    </el-input>
                </div>
                <div>
                    <span>Телефон</span>
                    <el-input
                        v-model="numberInput"
                        clearable>
                    </el-input>
                </div>
                <div>
                    <span>Начальник</span>
                    <el-select
                        v-model="parentSelect"
                        clearable>
                        <el-option
                            v-for="user in users"
                                :key="user.name"
                                :label="user.name"
                                :value="user.name">
                        </el-option>
                    </el-select>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="close">Сохранить</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['users'],
    data() {
      return {
        showModal: false,
        nameInput: '',
        numberInput: '',
        parentSelect: ''
      };
    },
    methods: {
        close() {
            this.showModal = false;
            this.$emit('save-user', {name: this.nameInput, number: this.numberInput});
        }
    }
}
</script>