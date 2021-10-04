<template>
    <div class="row">
        <div class="col-12 p-5">
            <div class="card mt-5">
                <div class="card-body" v-if="user">
                    <b-form-row>
                        <b-col col="sm">
                            <b-form-group label="نام">
                                <b-form-input disabled :value="user.first_name"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col col="sm">
                            <b-form-group label="نام خانوادگی">
                                <b-form-input disabled :value="user.last_name"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="نوع کاربر">
                                <b-form-input disabled :value="UserTypes.getType(parseInt(user.user_type))"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="sm">
                            <b-form-group label="شناسه">
                                <b-form-input disabled :value="user.id"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="نام کاربری">
                                <b-form-input disabled :value="user.username"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col col="sm">
                            <b-form-group label="ایمیل">
                                <b-form-input disabled :value="user.email"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="sm">
                            <b-form-group label="شماره همراه">
                                <b-form-input disabled :value="user.phone"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col col="sm">
                            <b-form-group label="تلفن">
                                <b-form-input disabled :value="user.telephone"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>

                    <b-form-row>
                        <b-col cols="sm">
                            <div>
                                <b-button v-b-modal.modal-1>تغییر دسترسی ها کاربر</b-button>

                                <b-modal hide-footer hide-header-close id="modal-1" title="تغییر دسترسی ها کاربر">
                                    <change-access :user_id="user.id" :roles="user.roles" :permissions="user.permissions"></change-access>
                                </b-modal>
                            </div>
                        </b-col>
                    </b-form-row>


                </div>
            </div>
        </div>

    </div>
</template>

<script>
import UserTypes from "~/constants/UserTypes";
import ChangeAccess from "~/components/users/change-access";
export default {
    name: "find",
    components: {ChangeAccess},
    layout: "main-content",
    data() {
        return {
            UserTypes,
            user: null
        }
    },
    async mounted() {
        let res = await this.$axios.get('user/find/' + this.$route.params.id)
        this.user = res.data.data
    }

}
</script>

<style scoped>

</style>
