import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
   <footer>
    <div className='footer-content'>
      <img src='src\assets\aws.png' alt='aps-logo' width="40" height="55"/>
      <div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width={15} height={15}><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>Army Public School, Bareilly Cantonment, Bareilly, 243001, Uttar Pradesh.
      </div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width={15} height={15}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>+919892349834</div>
    </div>
    </div>
    <div>© 2023 Army Public School, All rights reserved.</div>
    <div>Developed by<a href='https://github.com/arjunsharma1152' id='arjun'> Arjun Sharma</a></div>
   </footer>
  )
}

export default Footer