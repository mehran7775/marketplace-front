import {
    extend
} from "vee-validate";
import {
    required,
    alpha,
    digits,email
} from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "این فیلد الزامیست"
});

extend("alpha", {
    ...alpha,
    message: "فقط حروف می تواند وارد شود"
});
extend("digits", {
    ...digits,
    message: "شماره تلفن باید بصورت عدد و یازده کاراکتر باشد"
});

extend("email", {
    ...email,
    message: "ایمیل صحیح وارد نشده است"
});

