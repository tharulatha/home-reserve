import React from 'react';
import trunkey1 from '../assets/images/turnkey1.jpg';
import turnkey2 from '../assets/images/turnkey-2.jpg'

function Whywe() {
  return (
      <section className='why-we'>
          <h2 className="h2 section-title">Why We?</h2>
          <div className='why-we-container'>
              <div className='side-images'>
                  <div>
                      <img src={trunkey1} className='turnkey1' alt='turnkey-1' />
                  </div> 
                  <div>
                  <img src={turnkey2} className='turnkey2' alt='turnkey-2' />
                  </div>
              </div>
              <div className='why-we-content'>
                  <ul>
                      <li>Single Point of Responsiblity</li>
                  </ul>  
              </div>
          </div>
    </section>
  )
}

export default Whywe