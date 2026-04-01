import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FiScissors, FiShield, FiSmartphone, FiGrid, FiEyeOff  } from 'react-icons/fi'
import { TfiBolt } from "react-icons/tfi";

const features = [
  { icon: <TfiBolt />, title: 'Easy', desc: 'Paste your long link and get a shortened URL in seconds.' },
  { icon: <FiScissors />, title: 'Shortened', desc: 'Use any link, no matter what size, we always shorten it.' },
  { icon: <FiGrid />, title: 'QR Code', desc: 'Generate a QR code for any URL instantly — no account needed.' },
  { icon: <FiEyeOff />, title: 'Privacy', desc: 'We value your data. Your original URLs and click data are never shared with third parties.' },
  { icon: <FiShield />, title: 'Reliable', desc: 'Enjoy 99.9% uptime and links that never expire or get flagged as spam.' },
  { icon: <FiSmartphone />, title: 'Devices', desc: 'Compatible with smartphones, tablets and desktop.' },
]

function InfoComponent() {
  return (
    <div style={{ padding: '3rem 0' }}>

      {/* Hero Text */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 700 }}>Simple, fast URL shortener with QR Code generator!</h2>
        <p style={{ maxWidth: '640px', margin: '1rem auto', color: '#555', lineHeight: '1.7' }}>
          Shorten long links from Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok,
          blogs and any domain name. You can also generate a QR code for any URL instantly —
          both tools work independently or together. Just paste your URL and you're good to go.
        </p>
      </div>

      {/* Two feature highlight */}
      <Row className='g-3' style={{ marginBottom: '2rem' }}>
        <Col xs={12} md={6}>
          <div style={{
            backgroundColor: '#e8eef8',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            height: '100%'
          }}>
            <h4 style={{ fontWeight: 700 }}>🔗 URL Shortener</h4>
            <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>
              Shorten any long URL and share it on sites, chats, and emails.
              Track how many clicks your link receives with our built-in click counter.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{
            backgroundColor: '#e8eef8',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            height: '100%'
          }}>
            <h4 style={{ fontWeight: 700 }}>📷 QR Code Generator</h4>
            <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>
              Generate a scannable QR code for any URL — shortened or original.
              Perfect for print materials, posters, business cards, and more.
            </p>
          </div>
        </Col>
      </Row>

      {/* Shorten share track */}
      <div style={{
        backgroundColor: '#e8eef8',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h4 style={{ fontWeight: 700 }}>Shorten, share and track</h4>
        <p style={{ color: '#555', maxWidth: '580px', margin: '0.75rem auto', lineHeight: '1.7' }}>
          Your shortened URLs can be used in publications, documents, advertisements, blogs, forums,
          and instant messages. Generate a QR code from your shortened link for even easier sharing.
          Monitor your link performance with our click counter.
        </p>
      </div>

      {/* Features Grid */}
      <Row className='g-3'>
        {features.map((f, i) => (
          <Col key={i} xs={12} sm={6} md={4}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              height: '100%',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '1.5rem', color: '#4a6cf7', marginBottom: '0.75rem' }}>
                {f.icon}
              </div>
              <h6 style={{ fontWeight: 700 }}>{f.title}</h6>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{f.desc}</p>
            </div>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default InfoComponent