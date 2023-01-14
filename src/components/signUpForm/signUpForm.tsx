import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { FormWrapper, FormTitle, FormText, FormInput, FormText2, FormButton, FormCard } from "../common/form.Styles";


export const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValid, setIsValid] = useState(false)
    const currentTheme = useTheme();


    const handleChangeUsername = (event: any) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }


    useEffect(() => {
        const minLengthUsername = username.length > 5
        const passwordNumbers = password.match(/\d{1,}/);
        const passwordLetters = password.match(/[a-zA-Z]{1,}/gi);

        if(
            minLengthUsername && password.length > 5 && passwordLetters && passwordNumbers
        ) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [username, password])

    return(
        <>
            <FormWrapper theme={currentTheme.theme}>
                <FormTitle>Sign Up</FormTitle>
                <FormText>Enter your credentials</FormText>
                <FormCard>
                    <FormInput onChange={(event) => handleChangeUsername(event)} value={username} required type="text" placeholder="Username" />
                    <FormInput onChange={(event) => handleChangePassword(event)} value={password} required type="text" placeholder="Password" />
                    <FormText2>Already have account? <NavLink to={"/login"}>Login</NavLink></FormText2> 
                    <FormButton disabled={!isValid}>Sign Up</FormButton>
                </FormCard>
            </FormWrapper>
        </>
    )
}