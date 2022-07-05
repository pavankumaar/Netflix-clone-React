import React, { Component } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

import foorMenuList from '../../Assets/json/Login/footermenu.json'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.foorMenuList = foorMenuList
  }
  render() {
    return (
      <div className='login-page-container'>
        <div className='main_image'>
          <div className='header'>
            <div className='logo logoabs'>NETFLIX</div>
          </div>
          <div>
            <div className='signin-container'>
              <span className='signin-title'>Sign In</span>
              <div class='signin-form'>
                <form action=''>
                  <div className='signin-input-container'>
                    <input
                      type='email'
                      placeholder=' '
                      required
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    />
                    <label>Email or phone number</label>
                    <span className='error'>
                      Please enter a valid email address or phone number.
                    </span>
                  </div>
                  <div className='signin-input-container'>
                    <input
                      type='password'
                      placeholder=' '
                      minLength='4'
                      maxLength='60'
                      required
                    />
                    <label>Password</label>
                    <span className='error'>
                      Your password must contain between 4 and 60 characters.
                    </span>
                  </div>
                  <div className='signin-button'>
                    <button type='submit'>Sign In</button>
                  </div>
                </form>
              </div>
              <div className='remore'>
                <div style={{ display: 'flex' }}>
                  <input type='checkbox' />
                  <div>Remember me</div>
                </div>
                <div>Need Help?</div>
              </div>
              <div className='signup-help'>
                New to Netflix? <Link to='/'>Sign up now.</Link>
              </div>
              <div className='protect-help'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a href=''>Learn more.</a>
              </div>
            </div>
            <div className='footer'>
              <div
                className='footer-card'
                style={{ backgroundColor: 'transparent' }}
              >
                <p>
                  Questions? Call <a href=''>000-800-040-1843</a>
                </p>
                <div className='footer-table'>
                  <table>
                    {this.foorMenuList.map((row) => {
                      return (
                        <tr>
                          {row.map((item) => {
                            return (
                              <td>
                                <a href='/'>{item}</a>
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </table>
                </div>
                <div class='select-wrapper'>
                  <select name='select' id='select' defaultValue='eng'>
                    <option value='eng'>English</option>
                    <option value='hi'>Hindi</option>
                  </select>
                </div>
              </div>
            </div>
            <img
              style={{ height: '1100px' }}
              src={
                'https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/993003ba-1a9f-4b48-854f-4959e42116f3/IN-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg'
              }
            ></img>
            <div className='shadow'></div>
            <div class='img-gradient'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
