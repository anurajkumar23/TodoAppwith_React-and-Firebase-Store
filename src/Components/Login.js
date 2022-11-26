import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'

export const Login = (props) => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [loginError, setLoginError]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err=>setLoginError(err.message))
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h2>LOGIN HERE</h2>
            <br></br>
            <form autoComplete="off" className='form-group'
            onSubmit={handleLogin}>
                
                <label>Enter Email</label>
                <input type="email" className='form-control'
                    required onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <br></br>
                <label>Enter Password</label>
                <input type="password" className='form-control'
                    required onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <br></br>
                <button type="submit" className='btn btn-success mybtn2'>
                   LOGIN
                </button>
            </form>
            {loginError&&<div className='error-msg'>
                {loginError}
            </div>}
            
            <span>Don't have an account? Create One
            <Link to="signup"> here</Link></span>
        </div>
    )
}
