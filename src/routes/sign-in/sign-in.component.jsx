import { signInWithGooglePopUp } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp();
        // main function is to get Access Token to get CRUD access
        console.log(response);
    }

    return (
        <div>
            <h1>Sign In Pages</h1>
            <button onClick={logGoogleUser}>Sign In With Google Email</button>
        </div>
    );
};

export default SignIn
