import React, { Component } from 'react'
import './RegForm.css'
import { Link } from 'react-router-dom'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class RegForm extends Component {
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
            <div className='reg-body-container regform-body-container animate'>
              <div>
                <div className='regform-step'>
                  STEP <b>1</b> OF <b>3</b>
                </div>
                <div className='regform-title'>Create a password to start your membership</div>
                <div className='regform-context'>Just a few more steps and you're done!</div>
                <div className='regform-context'>We hate paperwork, too.</div>
                <input className='regform-input' placeholder='Email' type='text'></input>
                <input className='regform-input' placeholder='Password' type='text'></input>
                <Link to='/signup/plan'>
                  <button style={{ width: '100%' }} className='reg-submit'>
                    Next
                  </button>
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
                              <a href=''>{item}</a>
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

export default RegForm
