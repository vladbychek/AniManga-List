import { LoginButton, LoginCard, LoginInput, LoginText, LoginText2, LoginTitle, LoginWrapper } from "./loginForm.Styles"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


export const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValid, setIsValid] = useState(false)

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

        // if (username) {
		// 	minLengthUsername ? setIsErrorName(false) : setIsErrorName(true);
		// }

		// if (password && passwordLetters) {
		// 	passwordNumbers && passwordLetters
		// 		? setIsErrorPassword(false)
		// 		: setIsErrorPassword(true);
		// }
    }, [username, password])
    return(
        <>
            <LoginWrapper>
                <LoginTitle>Login</LoginTitle>
                <LoginText>Enter your credentials</LoginText>
                <LoginCard action="">
                    <LoginInput onChange={(event) => handleChangeUsername(event)} value={username} required type="text" placeholder="Username" />
                    <LoginInput onChange={(event) => handleChangePassword(event)} value={password} required type="text" placeholder="Password" />
                    <LoginText2>Don't have account? <NavLink to={"/signUp"}>SignUp</NavLink></LoginText2> 
                    <LoginButton disabled={!isValid}>Login</LoginButton>
                </LoginCard>
            </LoginWrapper>
        </>
    )
}