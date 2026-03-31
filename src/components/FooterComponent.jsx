import React from 'react'
import { Row, Col } from 'react-bootstrap'

function FooterComponent() {
  return (
    <footer style={{
      backgroundColor: '#1a1f36',
      color: '#aab0c6',
      padding: '3rem 0 1.5rem',
      marginTop: '2rem'
    }}>
      <div className='container'>
        <Row className='g-4' style={{ marginBottom: '2rem' }}>

          {/* Brand */}
          <Col xs={12} md={4}>
            <h5 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
              🔗 Trimmr
            </h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              A free and simple tool to shorten URLs and generate QR codes.
              Built for everyone — no account required.
            </p>
          </Col>

          {/* Tools */}
          <Col xs={6} md={2}>
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Tools</h6>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              {['URL Shortener', 'QR Generator'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  <a href='#' style={{ color: '#aab0c6', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#aab0c6'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Company */}
          <Col xs={6} md={2}>
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Company</h6>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              {['About', 'Contact'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  <a href='#' style={{ color: '#aab0c6', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#aab0c6'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Legal */}
          <Col xs={6} md={2}>
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Legal</h6>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              {['Privacy Policy', 'Terms of Service'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  <a href='#' style={{ color: '#aab0c6', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#aab0c6'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

        </Row>

        {/* Divider */}
        <hr style={{ borderColor: '#2e3452', margin: '0 0 1.5rem' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.85rem'
        }}>
          <span>© {new Date().getFullYear()} Trimmr. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}

export default FooterComponent