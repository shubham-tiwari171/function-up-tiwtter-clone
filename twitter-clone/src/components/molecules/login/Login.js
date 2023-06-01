import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/reducers/reducers';

export default function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({ name: '', email: '' });
    const { isUserLoggedIn } = useSelector(state => state.users);
    let dispatch = useDispatch();
    useEffect(() => {
        const getUserData = localStorage.getItem('userData');
        setInputValue((prevState) => ({
            ...prevState,
            ...JSON.parse(getUserData),
        }));
    }, []);

    function getData(e) {
        setInputValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const getUserArr = localStorage.getItem('userData');
        if (getUserArr) {
            try {
                const userData = JSON.parse(getUserArr);
                const { name, email } = inputValue;
                const userLogin = userData.find((element) => {
                    return element.name === name && element.email === email;
                });

                if (userLogin.length === 0) {
                    alert('Invalid details');
                } else {
                    dispatch(loginSuccess(userLogin));

                    //console.log(userLogin.id)
                    // console.log("success")
                    // navigate('/page');
                }
            } catch (error) {
                console.error('Error parsing userData:', error);
                alert('User data is invalid');
            }
        } else {
            alert('User data not found')
        }
    }

    return (

        <div className={styles.Login}>
            <div className={styles.Logo}>
                <img alt='twitter' src='./twitter.png' />
                <h2>Sign in to Twitter</h2>
                <button>
                    <img alt='google' src='./google.png' />
                    Sign in with Google
                </button>
                <button>
                    <img alt='apple' src='./apple.png' />
                    Sign in with Apple
                </button>
                <hr />
                <span>or</span>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='User Name'
                        value={inputValue.name}
                        onChange={getData}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={inputValue.email}
                        onChange={getData}
                    />
                    <br /><br />
                    <Link to='/password_reset'>Forgot password? </Link>
                    <div className={styles.Buttons}>
                        <button>Log in</button>
                    </div>
                </form>
                <div>Don't have an account?</div > <Link to='/signup'> Sign Up</Link>
            </div>
        </div>
    );
}
