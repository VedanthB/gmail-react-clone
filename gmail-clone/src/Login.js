import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {
    const dispatch = useDispatch()
   
    const signIn = () => {
        auth.signInWithPopup(provider)
         .then(({user}) => {
             dispatch(
                 login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch((error) => alert(error.message))
    }  


    return (
        <div className="login" >
            <div className="login__container" >
                <img 
                 src="https://cdn.vox-cdn.com/thumbor/skG1-Pf080fswpt8cGgYTJDN9i4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg" 
                 alt="" 
                 />
                 <Button 
                  variant="contained" 
                  color='primary' 
                  onClick={signIn} 
                  >Login</Button>
            </div>
            
        </div>
    )
}

export default Login
