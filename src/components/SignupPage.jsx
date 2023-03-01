import {React, useState} from 'react';
import Greetings from './Greetings';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordStrong, setIsPasswordStrong] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password, nationality)
  }

  function handleEmailChange(event){
    setEmail(event.target.value);
    setIsEmailValid(event.target.checkValidity());
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    // NOTE: RegEx for strong password taken from https://www.section.io/engineering-education/password-strength-checker-javascript/
    const passwordStrengthCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(event.target.value);
    setIsPasswordStrong(passwordStrengthCheck);

  }

  function handleNationalityChange(event) {
    setNationality(event.target.value)
  }

  let emailClass, passwordClass;
  if (email.length) emailClass = isEmailValid ? 'valid-email' : 'invalid-email';
  if (password.length) passwordClass = isPasswordStrong ? 'strong-password' : 'weak-password'

  return (
    <div className='SignupPage'>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="input-email">Email:</label>
          <input type="email" name="email" id="input-email" value={email} onChange={handleEmailChange} className={emailClass}/>
        </div>
        <div>
          <label htmlFor="input-password">Password:</label>
          <input type="password" name="password" id="input-password" value={password} onChange={handlePasswordChange} className={passwordClass}/>
        </div>
        <div>
          <label htmlFor="select-nationality">Nationality:</label>
          <select name="nationality" id="select-nationality" value={nationality} onChange={handleNationalityChange}>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
          </select>
        </div>



        <button>Sign Up</button>
      </form>

      <hr />

      <Greetings lang={nationality}/>

      <p>Your email address is: {email}</p>
      <p>Your email address is {!isEmailValid &&'in'}valid </p>
      <p>Your password is {isPasswordStrong ? 'strong':'weak'}</p>
    </div>
  )
}

export default SignupPage