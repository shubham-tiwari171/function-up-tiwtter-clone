import React, { useState } from 'react'
import styles from './Login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const redirectHome = useNavigate()
    const email = 'bk'
    const password = 'bk@'

    const [inputValue, setInputValue] = useState({
        email: '',

        password: ''

    })

    function getData(e) {
        console.log(e.target.value)
        setInputValue(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const getUserArr = localStorage.getItem("userData")
        if (getUserArr && getUserArr.length) {
            const userData = JSON.parse(getUserArr);
            const userLogin = userData.filter((element, i) => {
                return element.email === email && element.password === password
            })
            if (userLogin.length === 0) {
                alert('invalid Details')
            }
            else {
                redirectHome('/Home')
            }

        }

    }

    return (
        <div className={styles.Login}>
            <div className={styles.Logo}>
                <img src='./twitter.png'/>
                <h2>Sign in to Twitter</h2>
                <button>
                    <img src='./google.png' />
                    Sign in with Google
                </button>
                <button>
                    <img src='./apple.png' />
                    Sign in with Apple
                </button>
                <hr></hr>
                <span>or</span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='user email'
                        name='email' onChange={getData}
                    />
                    <input type='password' placeholder='password'
                        name='password' onChange={getData}
                    /><br />
                    <Link to='/password_reset'>Forgot password?	</Link>
                    <div className={styles.Buttons}>
                        <button> Log in</button>
                    </div>
                </form>
                Don't have an account? <Link to='/signup'> Sign Up</Link>
            </div>
        </div>
    )
}
