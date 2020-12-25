import React from 'react'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


function Contact() {
    return (
        <div className='contact'>
            <div>
                <span className='contact__title_1' >Contact</span>
                <span className='contact__title_2'>Me</span>
            </div>

            <div className='contact__content'>
                <div className='contact__logo'>
                    <div className='contact__icon'>
                    <FacebookIcon />
                    </div>

                    <div className='contact__icon'>
                        <TwitterIcon />
                    </div>

                    <div className='contact__icon'>
                        <GitHubIcon />
                    </div>

                    <div className='contact__icon'>
                        <LinkedInIcon />
                    </div>

                    <div className='contact__icon'>
                        <EmailIcon />
                    </div>

                    
                    
                    
                    
                    
                </div>

                <div className='contact__sidebar'>
                    <span>Email : zai92webdev@gmail.com</span>
                    <span>Github : https://github.com/zai92webdev</span>
                </div>
            </div>

            <footer className='contact__footer'>
            <p>© 2020. ZAI</p>
            </footer>



        </div>
    )
}

export default Contact
