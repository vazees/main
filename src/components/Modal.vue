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
                        v-model="headSelect"
                        clearable>
                        <el-option
                            v-for="user in users"
                                :key="user.id"
                                :label="user.name"
                                :value="user.id">
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
        headSelect: ''
      };
    },
    methods: {
        close() {
            if (!this.nameInput.trim() || !this.numberInput.trim()) {
                alert('Заполните имя и номер!');
                return;
            }
            this.showModal = false;
            const id = this.users.length + 1;
            this.$emit('save-user', {id: id, headId: this.headSelect, name: this.nameInput, number: this.numberInput});
            this.nameInput = '';
            this.numberInput = '';
            this.headSelect = '';
        }
    }
}
</script>