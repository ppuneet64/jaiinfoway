import React from "react"
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Register = ({ history }) => {
    const { register, handleSubmit, errors, getValues } = useForm()

    /**
     * Register user Data
     * @param {Object} data Form Data
     */
    const handleRegister = (data = {}) => {
        localStorage.setItem('userData', JSON.stringify(data))
        toast.success('Successfully registered')
        history.push('/login')
    }

    return (
        <div className="shadow-card-bk">


            <div className="w3-container  shadow-card " id="register">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 head-color">Register</h3>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <input className="w3-input w3-section w3-border" type="text" placeholder="First Name" name="fname" ref={register({
                        required: true
                    })} />
                    {errors.fname && errors.fname.type === 'required' && <span className={`error-message`}>Please enter first name.</span>}
                    <input className="w3-input w3-section w3-border" type="text" placeholder="Last Name" name="lname" ref={register({
                        required: true
                    })} />
                    {errors.lname && errors.lname.type === 'required' && <span className={`error-message`}>Please enter last name.</span>}
                    <input className="w3-input w3-section w3-border" type="text" placeholder="Email" name="email" ref={register({
                        required: true,
                        pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
                    })} />
                    {errors.email && errors.email.type === 'required' && <span className={`error-message`}>Please enter email id</span>}
                    {errors.email && errors.email.type === 'pattern' && <span className={`error-message`}>Please enter valid email id</span>}
                    <input className="w3-input w3-section w3-border" type="password" placeholder="Password" name="password" ref={register({
                        required: true,
                    })} />
                    {errors.password && errors.password.type === 'required' && <span className={`error-message`}>Please enter password</span>}
                    <input className="w3-input w3-section w3-border" type="password" placeholder="Confirm Password" name="cpassword" ref={register({
                        required: true,
                        validate: value => (value === getValues()["password"])
                    })} />
                    {errors.cpassword && errors.cpassword.type === 'required' && <span className={`error-message`}>Please enter password again</span>}
                    {errors.cpassword && errors.cpassword.type === 'validate' && <span className={`error-message`}>Password confirmation is not same as password.</span>}
                    <button className="w3-button w3-black w3-section" type="submit">
                        <i className="fa fa-sign-in"></i> Register
                </button>
                </form>
            </div>
        </div>
    )
}
export default Register