import {
    extend
} from "vee-validate";
import {
    required,
    alpha,
    email
} from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "{_field_} الزامیست"
});

extend("alpha", {
    ...alpha,
    message: "فقط حروف می تواند وارد شود"
});

extend("regPhone", {
    validate(value){
        return value.match('^09[0-9]{9}')
    },
    message: '{_field_} صحیح وارد نشده است',
});

extend("email", {
    ...email,
    message: "ایمیل صحیح وارد نشده است",
    
});
extend("length", {
    validate(value, { length }) {
        return value.length === length;
    },
    params: ['length'],
    message: '{_field_} باید {length} کاراکتر باشد',
});


extend('min', {
    validate(value, { length }) {
        return value.length >= length;
    },
    params: ['length'],
    message: '{_field_} باید حداقل {length} کاراکتر باشد',
});
extend('max', {
    validate(value, { length }) {
        return value.length <= length;
    },
    params: ['length'],
    message: '{_field_} باید حداکثر {length} کاراکتر باشد',
});

