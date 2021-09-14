import { useState } from "react"

export default function useForm({initialValues, validation, onSubmit}) {
    const [values, setValues] = useState({
        account: initialValues.account,
        password: initialValues.password,
        rememberMe: initialValues.rememberMe
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'account':
                setValues({...values, account: value});
                setErrors((err) => { 
                    delete err.account;
                    return err;
                })
                break;

            case 'password':
                setValues({...values, password: value});
                setErrors((err) => { 
                    delete err.password;
                    return err;
                })
                break;

            case 'rememberMe':
                const checked = e.target.checked
                setValues({...values, rememberMe: checked});
                break;

            default:
                break;
        };
    }
    const handleSubmit = (e) => {
        const err = validation(values);

        err.account && setErrors((e) => { return {...e, account: err.account} });
        err.password && setErrors((e) => { return {...e, password: err.password} });

        if (Object.keys(err).length === 0) {
            alert('Submit!');
            onSubmit(values);
        }
    }

    return { handleChange, handleSubmit, values, errors };
}