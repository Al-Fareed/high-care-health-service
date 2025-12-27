import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-4 rounded-t-3xl'>
      <div className='grid grid-cols-4 gap-4'>
        <div>
          <h3 className='text-lg font-bold'>HighCare Health <br/> Services Private Limited</h3>
          <p className='mt-2'>Your trusted partner in comprehensive healthcare coverage and wellness.</p>
          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Address:</h4>
            <p>No.57, Om Shakthi Complex,</p>
            <p>Hosur Road, Garvebhavi Palya,</p>
            <p>Bangalore, Karnataka - 560068</p>
          </div>
          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Contact:</h4>
            <p>Phone: 7204010983</p>
            <p>Email: admin@highcarehealthservices.com</p>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-bold'>Services</h3>
          <ul className='mt-2 space-y-2'>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Health Consultations</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Medical Coverage</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Family Plans</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Emergency Care</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Online Consultation</a></li>
          </ul>
        </div>
       <div>
          <h3 className='text-lg font-bold'>Company</h3>
          <ul className='mt-2 space-y-2'>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>About Us</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Contact</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Careers</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Blog</a></li>
          </ul>
        </div>
       <div>
          <h3 className='text-lg font-bold'>Legal</h3>
          <ul className='mt-2 space-y-2'>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Privacy Policy</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Terms of Service</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Refund Policy</a></li>
            <li><a href='#' className='hover:text-gray-300 transition-colors'>Contact Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer