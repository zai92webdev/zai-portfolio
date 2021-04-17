import React from 'react'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';



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
                        <Tooltip title='No Link Provided.' arrow>
                            <FacebookIcon />
                        </Tooltip>

                    </div>

                    <div className='contact__icon'>
                        <Tooltip title='No Link Provided.' arrow>
                            <TwitterIcon />
                        </Tooltip>
                        
                    </div>

                    <div className='contact__icon'>
                        <Tooltip title='https://github.com/zai92webdev' arrow>
                            <GitHubIcon />
                        </Tooltip>
                        
                    </div>

                    <div className='contact__icon'>
                        <Tooltip title='No Link Provided.' arrow>
                            <LinkedInIcon />
                        </Tooltip>
                        
                    </div>

                    <div className='contact__icon'>
                        <Tooltip title='zai92webdev@gmail.com' arrow>
                            <EmailIcon />                            
                        </Tooltip>
                    </div>


                </div>

                <div className='contact__sidebar'>
                    <span>Email : zai92webdev@gmail.com</span>
                    <span>Github : <a href="https://github.com/zai92webdev" style={{color:'white'}}>https://github.com/zai92webdev</a> </span>
                </div>
            </div>

            <footer className='contact__footer'>
            <p>© 2020. ZAI</p>
            </footer>



        </div>
    )
}

export default Contact
