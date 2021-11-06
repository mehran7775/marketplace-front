import {
    extend
} from "vee-validate";
import {
    required,
    alpha,
    digits,email,
    length,min,max
} from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "{_field_} الزامیست"
});

extend("alpha", {
    ...alpha,
    message: "فقط حروف می تواند وارد شود"
});
extend("digits", {
    ...digits
});

extend("email", {
    ...email,
    message: "ایمیل صحیح وارد نشده است"
});
extend("length", {
    ...length,
    message: `{_field_} باید {_value_} باشد`
});


extend('min', {
    validate(value, { length }) {
        return value.length >= length;
    },
    params: ['length'],
    message: 'The {_field_} field must have at least {length} characters',
    message: '{_field_} باید حداقل {length} کاراکتر باشد',
});

