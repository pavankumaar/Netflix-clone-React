import React, { Component } from 'react'
import './Plan.css'
import { Done } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import foorMenuList from '../../Assets/json/Login/footermenu.json'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'

class Plan extends Component {
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
            <div className='reg-body-container animate'>
              <img style={{ transform: 'scale(0.6)' }} src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png'></img>
              <div className='step-indicator'>STEP 2 OF 3</div>
              <span className='step-title'>Choose your plan.</span>
              <div className='context-list'>
                <ul>
                  {this.contextList.map((context) => {
                    return (
                      <li>
                        <div>
                          <Done></Done>
                        </div>
                        <div>{context}</div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <Link to='/signup/planform'>
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

export default Plan
