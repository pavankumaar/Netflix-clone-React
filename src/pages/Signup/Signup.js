import React, { Component } from 'react'
import './Signup.css'
import { Button } from '@material-ui/core/'
import { KeyboardArrowRight, Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import StoryCard from '../../components/StoryCard/StoryCard'
import DeviceSvg from '../../components/DeviceSvg/DeviceSvg'
import storyCardList from '../../Assets/json/Login/storycard.json'
import faqList from '../../Assets/json/Login/faq.json'
import foorMenuList from '../../Assets/json/Login/footermenu.json'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.storyCardList = storyCardList
    this.faqList = faqList
    this.foorMenuList = foorMenuList
    this.state = {
      faq: '',
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleFaqClick(faqId) {
    if (this.state.faq !== faqId) {
      this.setState({ faq: faqId })
    } else {
      this.setState({ faq: '' })
    }
  }
  render() {
    return (
      <div className='login-page-container'>
        <div className='main_image'>
          <div className='header'>
            {/* <div className='logo logoabs'>NETFLIX</div> */}
            <div className='netflixlogo logoabs'>
              <DeviceSvg device='netflix'></DeviceSvg>
            </div>
            <div className='buttons'>
              <div className='language'>
                <select name='' id='' defaultValue='eng'>
                  <option value='eng'>English</option>
                  <option value='hi'>Hindi</option>
                </select>
              </div>
              <Link className='signin' to='/login'>
                Sign in
              </Link>
            </div>
          </div>
          <div>
            <div className='message-container'>
              <h1 className='text-title'>Unlimited movies, TV shows and more</h1>
              <h2 className='text-subtitle'>Watch anywhere. Cancel anytime.</h2>
              <form action='GET'>
                <h3 style={{ fontSize: '20px' }} className='text-subtitle'>
                  Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className='email-form'>
                  <input type='text' placeholder='Email address' />
                  <Link to='/signup/registration'>
                    <Button className='submit' endIcon={<KeyboardArrowRight style={{ transform: 'scale(1.5)' }} />}>
                      Get Strated
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
            <img src={'https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/993003ba-1a9f-4b48-854f-4959e42116f3/IN-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg'}></img>
            <div className='shadow'></div>
            <div class='img-gradient'></div>
          </div>
        </div>
        <div className='story-card-container'>
          {this.storyCardList.map((storyCard) => {
            return <StoryCard title={storyCard.title} subtitle={storyCard.subtitle} image={storyCard.image} type={storyCard.type} />
          })}
        </div>
        <div className='faq-container'>
          <h1 className='faq-title'>Frequently Asked Questions</h1>
          {this.faqList.map((faq) => {
            return (
              <div className='acc-container' onClick={() => this.handleFaqClick(faq.faqId)}>
                <div className='acc-title acc-text'>
                  <p>{faq.question}</p>
                  <div className={this.state.faq === faq.faqId ? 'rotate-icon' : ''}>
                    <Add></Add>
                  </div>
                </div>
                {this.state.faq === faq.faqId && <div className='acc-subtitle acc-text'>{faq.answer}</div>}
              </div>
            )
          })}
          <div className='signupform'>
            <form action='GET'>
              <h3 style={{ fontSize: '20px' }} className='text-subtitle'>
                Ready to watch? Enter your email to create or restart your membership.
              </h3>
              <div className='email-form'>
                <input type='text' placeholder='Email address' />
                <Button className='submit' endIcon={<KeyboardArrowRight style={{ transform: 'scale(1.5)' }} />}>
                  Get started
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='footer-card'>
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
          <div className='netflixtitle'>Netflix India</div>
        </div>
      </div>
    )
  }
}

export default Signup
