import * as yup from "yup"

export const userSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(4).max(10).required("required")
})
