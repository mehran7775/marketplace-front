import {
    extend
} from "vee-validate";
import {
    required,
    alpha
} from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "این فیلد الزامیست"
});

extend("alpha", {
    ...alpha,
    message: "فقط حروف می تواند وارد شود"
});
