import React, { Component } from 'react'
import './PaymentPicker.css'
import { ChevronRight } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class PaymentPicker extends Component {
  constructor(props) {
    super(props)
    this.foorMenuList = foorMenuList
    this.contextList = ['No commitments, cancel anytime.', 'Everything on Netflix for one low price.', 'No ads and no extra fees. Ever.']
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
          <div className='reg-body'>
            <div className='reg-body-container paymentpicker-body-container animate'>
              <img style={{ transform: 'scale(0.6)' }} src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png'></img>
              <div className='step-indicator'>STEP 3 OF 3</div>
              <span className='step-title'>Set up your payment.</span>
              <div className='payment-text'>Your membership starts as soon as you set up payment.</div>
              <div className='payment-text'>
                <b> No commitments. Cancel online anytime. </b>
              </div>
              <div className='payments-container'>
                <Link to='/signup/creditoption'>
                  <div className='payments'>
                    <div className='payment-data'>
                      <div>Credit or Debit Card</div>
                      <span className='card-container'>
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png' />
                      </span>
                    </div>
                    <div>
                      <ChevronRight></ChevronRight>
                    </div>
                  </div>
                </Link>
                <Link to='/signup/upioption'>
                  <div className='payments'>
                    <div className='payment-data'>
                      <div>UPI Autopay</div>
                      <span className='card-container'>
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg' />
                        <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg' />
                      </span>
                    </div>
                    <div>
                      <ChevronRight></ChevronRight>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='reg-footer'>
            <div className='footer-card' style={{ backgroundColor: '#f3f3f3' }}>
              <p>
                Questions? Call <a href=''>000-800-040-1843</a>
              </p>
              <ul className='footer-list'>
                {this.foorMenuList.map((link) => {
                  return <li className='footer-link'>{link}</li>
                })}
              </ul>
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

export default PaymentPicker
