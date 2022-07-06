import React, { Component } from 'react'
import './UpiOption.css'
import { Link } from 'react-router-dom'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class UpiOption extends Component {
  constructor(props) {
    super(props)
    this.foorMenuList = foorMenuList
    this.upiList = [
      {
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg',
        title: 'BHIM UPI',
      },
      {
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg',
        title: 'Paytm',
      },
      {
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg',
        title: 'PhonePe',
      },
      {
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg',
        title: 'Amazon Pay',
      },
      {
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg',
        title: 'Google Pay',
      },
    ]
    this.state = {
      dropDownOpen: false,
      selectedUpi: {},
      isUpiSelected: false,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleDropDownChange(upi) {
    this.setState({ isUpiSelected: true, selectedUpi: { ...upi }, dropDownOpen: false })
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
          <div className='reg-body upioption-body'>
            <div className='reg-body-container upioption-body-container animate'>
              <div>
                <div className='regform-step'>
                  STEP <b>3</b> OF <b>3</b>
                </div>
                <div className='regform-title'>Set up UPI AutoPay</div>
                <div style={{ marginTop: '10px' }}>You can change this recurring payment any time in your settings.</div>
                <div style={{ width: '380px' }}>
                  <div onClick={() => this.setState({ dropDownOpen: this.state.dropDownOpen ? false : true })} className='upi-dropdown'>
                    {this.state.isUpiSelected ? (
                      <div className='upi'>
                        <img alt='' src={this.state.selectedUpi.image} />
                        <span className='title'>{this.state.selectedUpi.title}</span>
                      </div>
                    ) : (
                      <span>Select your UPI app</span>
                    )}
                    {this.state.dropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                  </div>
                  {this.state.dropDownOpen && (
                    <div className='upi-container'>
                      {this.upiList.map((upi) => {
                        return (
                          <div onClick={() => this.handleDropDownChange(upi)} className='upi'>
                            <img alt='' src={upi.image} />
                            <span className='title'>{upi.title}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                <input disabled={this.state.isUpiSelected ? false : true} className='regform-input' placeholder='UPI ID' type='text'></input>
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

export default UpiOption
