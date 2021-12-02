<template>
    <div v-if="user">
        <page-title title_text="جزییات کاربر" icon="product">
        </page-title>
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <div class="row">
                <div class="col-12 p-5">
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
                                        <b-form-input disabled
                                                      :value="UserTypes.getType(parseInt(user.user_type))"></b-form-input>
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
                            <!--<b-form-row>
                                <b-col cols="sm">
                                    <div>
                                        <b-button v-b-modal.modal-1>تغییر دسترسی ها کاربر</b-button>

                                        <b-modal hide-footer hide-header-close id="modal-1" title="تغییر دسترسی ها کاربر">
                                            <change-access :user_id="user.id" :permissions="user.permissions"></change-access>
                                        </b-modal>
                                    </div>
                                </b-col>
                            </b-form-row>-->
                        </div>
                    </div>
        </div>
        <div class="bg-white shadow-sm py-4 my-2 px-5" style="border-radius: 10px;">
            <div class="row">
                <div class="col-12 p-5">
                    <change-access :user_id="user.id" :roles="user.roles"
                                   :permissions="user.permissions"></change-access>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserTypes from "~/constants/UserTypes";
import ChangeAccess from "~/components/users/change-access";
import api from "~/services/api";
import PageTitle from "~/components/main/pageTitle";

export default {
    name: "find",
    components: {PageTitle, ChangeAccess},
    layout: "main-content",
    data() {
        return {
            UserTypes,
            user: null,
        }
    },
    async mounted() {
        let res = await api.get('user/find/' + this.$route.params.id, this.$cookies.get('token'))
        this.user = res.data.data
    }

}
</script>

<style scoped>

</style>
