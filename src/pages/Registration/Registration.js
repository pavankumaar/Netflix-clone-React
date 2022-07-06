import React, { Component } from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.foorMenuList = foorMenuList
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <div className='registration-container'>
          <div className='reg-header'>
            <div className='netflixlogo'>
              <DeviceSvg device='netflix'></DeviceSvg>
            </div>
            <div className='reg-signin'>
              <Link to='/login'>
                <span>Sign In</span>
              </Link>
            </div>
          </div>
          <div className='reg-body'>
            <div className='reg-body-container animate'>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png' alt='devices'></img>
              <div className='step-indicator'>STEP 1 OF 3</div>
              <span className='step-title'>Finish setting up your account</span>
              <div className='step-context'>Netflix is personalised for you. Create a password to watch on any device at any time.</div>
              <div>
                <Link to='/signup/regform'>
                  <button className='reg-submit'>Next</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='reg-footer'>
            <div className='footer-card' style={{ backgroundColor: '#f3f3f3' }}>
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
                              <a href='#'>{item}</a>
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
        </div>
      </>
    )
  }
}

export default Registration
