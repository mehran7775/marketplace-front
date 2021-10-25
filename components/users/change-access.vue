<template>
    <div>
        <b-form-row>
            <b-col col="sm">
                <b-form-group label="نقش های مورد نظر خود را انتخاب کنید:">
                    <b-form-checkbox
                        v-for="role in Object.keys(roles)"
                        v-model="roles[role]"
                        :value="true">
                        {{ role }}
                    </b-form-checkbox>
                </b-form-group>
            </b-col>
            <b-col col="sm">
                <b-form-group label="دسترسی های مورد نظر خود را انتخاب کنید:">
                    <b-form-checkbox
                        v-for="permission in Object.keys(permissions)"
                        v-model="permissions[permission]"
                        :value="true">
                        {{ permission }}
                    </b-form-checkbox>
                </b-form-group>
            </b-col>

        </b-form-row>
        <b-form-group>
            <b-btn variant="success" @click="changeAccess">تغییر دسترسی ها</b-btn>
        </b-form-group>

    </div>
</template>

<script>
import api from "~/services/api";

export default {
    props: ['permissions', 'roles','user_id'],
    name: "change-access",
    data() {
        return {
            selected: []
        }
    },
    mounted() {
        for (let permission in Object.keys(this.permissions)) {
            permission = Object.keys(this.permissions)[permission]
            if (this.permissions[permission]) {
                this.selected.push(permission)
            }
        }
        for (let role in Object.keys(this.roles)) {
            role = Object.keys(this.roles)[role]
            if (this.roles[role]) {
                this.selected.push(role)
            }
        }
    },
    methods: {
        async changeAccess() {
            let json = {}
            json.roles = this.roles
            json.permissions = this.permissions
            let res = await api.post('user/change-access/' + this.user_id,json,this.$cookies.get('token'))
            alert(res.data.message)
        }
    }


}
</script>

<style>
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
