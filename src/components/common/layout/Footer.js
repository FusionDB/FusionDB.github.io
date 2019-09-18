import React from 'react'

import Logo from './Logo'
import { IconGithub, IconGitter, IconStackOverflow } from '../icons'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='colset'>
        <div className='col col-copyright'>
          <div className='logo'>
            <Logo />
            <span>
              Powered by{' '}
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='http://fusionlab.cn'
              >
                FusionDB
              </a>
            </span>
          </div>
          <div className='copyright-links'>
            <div className='social'>
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/FusionDB/fusiondb'
              >
                <IconGithub className='github' />
              </a>
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://gitter.im/fusiondb/fusiondb'
              >
                <IconGitter className='gitter' />
              </a>
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://stackoverflow.com/questions/tagged/fusiondb'
              >
                <IconStackOverflow className='stackoverflow' />
              </a>
            </div>
            <div className='copyright'>
              <p>
                © 2013-{new Date().getFullYear()} Fusionlab Software, Inc. All
                Rights Reserved.
              </p>
              <p>FusionDB is under the Apache 2.0 license.</p>
            </div>
            <ul>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer noopener'
                  href='http://www.fusionlab.cn'
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer noopener'
                  href='http://www.fusionlab.cn/privacy-policy'
                >
                  Privacy
                </a>
              </li>
              <li>
                <span id='teconsent' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
