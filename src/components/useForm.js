import { useState } from "react"

export default function useForm({initialValues, validation, onSubmit}) {
    const [values, setValues] = useState({
        account: initialValues.account,
        password: initialValues.password,
        rememberMe: initialValues.rememberMe
    });
    const [errors, setErrors] = useState({});

    const errorUpdater = (data) => {
        const err = validation(data);
        setErrors({...err});
        return err;
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {   
            case 'account':
                const v1 = {...values, account: value};
                setValues(v1)
                errorUpdater(v1);
                break;

            case 'password':
                const v2 = {...values, password: value};
                setValues(v2);
                errorUpdater(v2);
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
        const err = errorUpdater(values);

        if (Object.keys(err).length === 0) {
            alert('Submit!');
            onSubmit(values);
        }
    }

    return { handleChange, handleSubmit, values, errors };
}