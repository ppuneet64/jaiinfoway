import React, { useEffect } from "react"
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = ({ history }) => {
    const { register, handleSubmit, errors } = useForm()

    /**
     * Login User
     * @param {Object} data Form Data
     */
    const handleLogin = (data = {}) => {
        localStorage.setItem('userData', JSON.stringify(data))
        toast.success('Successfully Loggedin')
        history.push('/')
    }
    useEffect(() => {
        localStorage.removeItem('userData')
    }, [])

    return (
        <div className="shadow-card-bk">
            <div className="w3-container  shadow-card" id="login">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 head-color">Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input className="w3-input w3-section w3-border" type="text" placeholder="Email" name="email" ref={register({
                        required: true,
                        pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
                    })} />
                    {errors.email && errors.email.type === 'required' && <span className={`error-message`}>Please enter email id</span>}
                    {errors.email && errors.email.type === 'pattern' && <span className={`error-message`}>Please enter valid email id</span>}
                    <input className="w3-input w3-section w3-border" type="password" placeholder="Password" name="password" ref={register({
                        required: true
                    })} />
                    {errors.password && errors.password.type === 'required' && <span className={`error-message`}>Please enter password</span>}
                    <button className="w3-button w3-black w3-section" type="submit">
                        <i className="fa fa-sign-in"></i> Login
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login