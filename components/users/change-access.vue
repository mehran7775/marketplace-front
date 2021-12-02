<template>
    <div>
        <div class="alert alert-info" role="alert" v-if="message">
            {{ message }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
        </div>
        <b-form-group>
            <button class="btn btn-success" @click="changeAccess">اعمال تغییر دسترسی ها</button>
        </b-form-group>
        <hr>
        <div class="row">
            <div class="col-md-4 col-sm" v-for="permission in Object.keys(permissions)">
                <b-form-group
                    :label="Permissions.roles[permission]">
                    <div class="d-flex" v-for="p in Object.keys(permissions[permission])">
                        <b-form-checkbox
                            class="ml-2 mr-n2"
                            v-model="permissions[permission][p]"
                            :value="true"
                            switch>
                        </b-form-checkbox>
                        <label class="ml-auto mb-0">{{Permissions.permissions[permission][p]}}</label>
                    </div>
                </b-form-group>
            </div>

        </div>

    </div>
</template>

<script>
import api from "~/services/api";
import Permissions from "~/constants/Permissions";
export default {
    props: ['permissions','user_id','roles'],
    name: "change-access",
    data() {
        return {
            Permissions,
            selected: [],
            message: null,
            error: null,
        }
    },
    methods: {
        async changeAccess() {
            let json = {
                roles : {},
                permissions : {}
            }
            json.roles = this.roles
            for (let index in Object.keys(this.permissions)){
                let value = Object.keys(this.permissions)[index]
                for (let key in Object.keys(this.permissions[value])){
                    key = Object.keys(this.permissions[value])[key]
                    json.permissions[key] =  this.permissions[value][key]
                }
            }
            api.post('user/change-access/' + this.user_id,json)
                .then(response => {
                    this.message = response.data.message
                }).catch(({response}) => {
                this.error = response.data.message
            })
        }
    }


}
</script>

<style>
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
