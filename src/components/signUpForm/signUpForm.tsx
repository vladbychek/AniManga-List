import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignUpWrapper, SignUpTitle, SignUpText, SignUpCard, SignUpInput, SignUpText2, SignUpButton } from "./signUpForm.Styles";


export const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValid, setIsValid] = useState(false)
    // const [isErrorUsername, setIsErrorName] = useState<boolean>(false);
	// const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);


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
            <SignUpWrapper>
                <SignUpTitle>Sign Up</SignUpTitle>
                <SignUpText>Enter your credentials</SignUpText>
                <SignUpCard action="">
                    <SignUpInput onChange={(event) => handleChangeUsername(event)} value={username} required type="text" placeholder="Username" />
                    <SignUpInput onChange={(event) => handleChangePassword(event)} value={password} required type="text" placeholder="Password" />
                    <SignUpText2>Already have account? <NavLink to={"/login"}>Login</NavLink></SignUpText2> 
                    <SignUpButton disabled={!isValid}>Sign Up</SignUpButton>
                </SignUpCard>
            </SignUpWrapper>
        </>
    )
}