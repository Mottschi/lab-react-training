import {React, useState} from 'react';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en')

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password, nationality)
  }

  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNationalityChange(event) {
    setNationality(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='SignupPage'>
      <div>
        <label htmlFor="input-email">Email:</label>
        <input type="email" name="email" id="input-email" value={email} onChange={handleEmailChange}/>
      </div>
      <div>
        <label htmlFor="input-password">Password:</label>
        <input type="password" name="password" id="input-password" value={password} onChange={handlePasswordChange}/>
      </div>
      <div>
        <label htmlFor="select-nationality">Nationality:</label>
        <select name="nationality" id="select-nationality" value={nationality} onChange={handleNationalityChange}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
        </select>
      </div>



      <button>Submit</button>
    </form>
  )
}

export default SignupPage