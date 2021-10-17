<template>
    <div class="sign_in">
        <Xform>
            <template #content>
                <div class="form-group">
                    <label>نام کاربری</label>
                    <input
                        v-model="auth_path"
                        ref="auth_path"
                        type="text"
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label>رمز عبور</label>
                    <input
                        v-model="password"
                        ref="password"
                        type="text"
                        class="form-control"
                    />
                </div>

                <Xbutton
                    :on_click="do_login"
                    class="btn-sign m-auto"
                    text="ورود"
                ></Xbutton>
                <div class="form-group"></div>
            </template>
        </Xform>
    </div>
</template>

<script>
export default {
    layout: "sign",
    data() {
        return {
            auth_path: "",
            password: "",
        };
    },
    methods: {
        async do_login() {
            try {
                await this.$auth
                    .loginWith("laravelJWT", {
                        data: {
                            outh_param: this.auth_path,
                            password: this.password,
                            login_with_verification_code: false,
                        },
                    })
                    .then((res) => {
                        this.$bvToast.toast("شما با موفقیت لاگین شدید", {
                            title: "ورود",
                            variant: "success",
                            toaster: "b-toaster-top-center",
                            solid: true,
                            //  autoHideDelay: 10000,
                        });
                    });
            } catch (e) {
                console.log(e);
                this.$bvToast.toast("خطایی در مورد اتفاق افتاده است", {
                    title: "ورود",
                    variant: "danger",
                    toaster: "b-toaster-top-center",
                    solid: true,
                    //  autoHideDelay: 10000,
                });
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.btn-sign {
}
</style>
