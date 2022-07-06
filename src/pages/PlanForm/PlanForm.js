import React, { Component } from 'react'
import './PlanForm.css'
import { Done } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

import foorMenuList from '../../Assets/json/Login/footermenu.json'

function capitalize(str) {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}

class PlanForm extends Component {
  constructor(props) {
    super(props)
    this.foorMenuList = foorMenuList
    this.contextList = ['Watch all you want. Ad-free.', 'Recommendations just for you.', 'Change or cancel your plan anytime.']
    this.planList = [
      {
        title: 'Monthly price',
        mobile: '₹ 149',
        basic: '₹ 199',
        standard: '₹ 499',
        premium: '₹ 649',
      },
      {
        title: 'Video quality',
        mobile: 'Good',
        basic: 'Good',
        standard: 'Better',
        premium: 'Best',
      },
      {
        title: 'Resolution',
        mobile: '480p',
        basic: '480p',
        standard: '1080p',
        premium: '4K+HDR',
      },
    ]
    this.planDeviceList = {
      title: 'Devices you can use to watch',
      mobile: ['phone', 'tablet'],
      basic: ['phone', 'tablet', 'computer', 'tv'],
      standard: ['phone', 'tablet', 'computer', 'tv'],
      premium: ['phone', 'tablet', 'computer', 'tv'],
    }
    this.state = {
      selectedPlan: 'Basic',
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  changeSelectedPlan(plan) {
    this.setState({ selectedPlan: plan })
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
          <div className='reg-body planform-body animate'>
            <div className='reg-body-container planform-body-container'>
              <div>
                <div className='step-indicator'>STEP 2 OF 3</div>
                <span className='step-title'>Choose the plan that’s right for you</span>
                <div className='context-list'>
                  <ul className='planform-ul'>
                    {this.contextList.map((context) => {
                      return (
                        <li className='planform-li'>
                          <div>
                            <Done></Done>
                          </div>
                          <div>{context}</div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='plan-item-container'>
                  {['Mobile', 'Basic', 'Standard', 'Premium'].map((plan) => {
                    return (
                      <div
                        style={{
                          opacity: this.state.selectedPlan === plan ? '1' : '0.6',
                        }}
                      >
                        <div onClick={() => this.changeSelectedPlan(plan)} className='plan-item'>
                          {plan}
                        </div>
                        {this.state.selectedPlan === plan && <div className='pointer'></div>}
                      </div>
                    )
                  })}
                </div>
                <div className='planform-table'>
                  <table>
                    {this.planList.map((plan) => {
                      return (
                        <tr>
                          <td className='td-title'>{plan.title}</td>
                          <td onClick={() => this.changeSelectedPlan('Mobile')} className={this.state.selectedPlan === 'Mobile' ? 'td-text selected' : 'td-text'}>
                            {plan.mobile}
                          </td>
                          <td onClick={() => this.changeSelectedPlan('Basic')} className={this.state.selectedPlan === 'Basic' ? 'td-text selected' : 'td-text'}>
                            {plan.basic}
                          </td>
                          <td onClick={() => this.changeSelectedPlan('Standard')} className={this.state.selectedPlan === 'Standard' ? 'td-text selected' : 'td-text'}>
                            {plan.standard}
                          </td>
                          <td onClick={() => this.changeSelectedPlan('Premium')} className={this.state.selectedPlan === 'Premium' ? 'td-text selected' : 'td-text'}>
                            {plan.premium}
                          </td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td className='td-title'>{this.planDeviceList.title}</td>
                      {['mobile', 'basic', 'standard', 'premium'].map((plan) => {
                        return (
                          <td onClick={() => this.changeSelectedPlan(capitalize(plan))} className={this.state.selectedPlan.toLowerCase() === plan.toLowerCase() ? 'td-text selected' : 'td-text'}>
                            {this.planDeviceList[plan].map((device) => {
                              return (
                                <div style={{ paddingBottom: '10px' }}>
                                  <DeviceSvg device={device}></DeviceSvg>
                                  <div className='device-title'>{device}</div>
                                </div>
                              )
                            })}
                          </td>
                        )
                      })}
                    </tr>
                  </table>
                </div>
                <div className='end-content'>
                  <div>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. </div>
                  <br></br>
                  <div>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</div>
                </div>
                <div className='planform-submit'>
                  <Link to='/signup/paymentPicker'>
                    <button className='reg-submit'>Next</button>
                  </Link>
                </div>
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

export default PlanForm
