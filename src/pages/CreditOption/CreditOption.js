import React, { Component } from 'react'
import './CreditOption.css'
import { Link } from 'react-router-dom'
import { Done } from '@material-ui/icons'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class CreditOption extends Component {
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
                <span>Sign Out</span>
              </Link>
            </div>
          </div>
          <div className='reg-body creditoption-body'>
            <div className='reg-body-container creditoption-body-container animate'>
              <div>
                <div className='regform-step'>
                  STEP <b>3</b> OF <b>3</b>
                </div>
                <div className='regform-title'>Set up your credit or debit card</div>
                <span className='cards'>
                  <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' />
                  <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg' />
                  <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg' />
                  <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png' />
                </span>
                <input className='regform-input' placeholder='First Name' type='text'></input>
                <input className='regform-input' placeholder='Last Name' type='text'></input>
                <input className='regform-input' placeholder='Card Number' type='text'></input>
                <input className='regform-input' placeholder='Expiration date (MM/YY)' type='text'></input>
                <input className='regform-input' placeholder='Security Code (CVV)' type='text'></input>
                <div className='final-plan'>
                  <div>
                    <b>₹ 199/month</b>
                    <br></br>
                    <span style={{ color: 'gray' }}>Basic Plan</span>
                  </div>
                  <Link to='/signup/planform'>
                    <div className='changeplan'>Change</div>
                  </Link>
                </div>
                <div className='creditoption-content'>
                  Any payment above ₹ 2000 shall need additional authentication.<br></br>
                  <br></br>By checking the checkbox below, you agree to our <span style={{ color: '#0071eb' }}>Terms of Use, Privacy Statement</span>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹ 199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                </div>
                <div className='agree'>
                  <input type='checkbox'></input>
                  <span>I agree.</span>
                </div>
                <Link to='/signup/plan'>
                  <button style={{ width: '100%' }} className='reg-submit'>
                    Start Membership
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

export default CreditOption
