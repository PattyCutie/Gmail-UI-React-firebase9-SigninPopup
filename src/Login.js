import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
import { auth, googleProvider, signInWithPopup } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'



function Login() {
    const dispatch = useDispatch();
    
    //sign in with Google popup   
    const signInToApp = () => {
        signInWithPopup(auth, googleProvider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login__container">
                <h1>Plese Sign In to email box UI with Google Authenticated</h1>
                <Button onClick={signInToApp}>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                    alt=""
                />
                </Button>

            </div>
        </div>
    )
}

export default Login