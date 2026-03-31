import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { FaPaperclip } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";

import NavbarComponent from '../components/NavbarComponent'
import InfoComponent from '../components/InfoComponent';
import FooterComponent from '../components/FooterComponent';



function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f4f6fb', 
      overflowX: 'hidden' }}>
        
      <NavbarComponent />

      <div className='container'>
        <Row className='justify-content-center' style={{ gap: '1rem' }}>
          <div style={{textAlign:'center', marginBottom:'20px'}}>
            <h1 style={{
              fontWeight:'bold'
            }}>Where every link tells a story</h1>

            <span>Shorten URLs, generate custom QR codes, and track every chapter of your brand’s journey in <br /> one powerful platform</span>
          </div>
          
          <Col xs='auto'>

          {/* For URL shorter  */}
            <Card style={{ 
              height: 300, 
              width: 250, 
              border: '1px solid  #ccc', 
              borderRadius:25,
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              padding:'1.5rem' }}>
            
              <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'1rem'
              }}>
                <FaPaperclip style={{
                  fontSize: 60, 
                  color: '#2d4a8a' }}/>
                <span style={{
                  fontWeight:'bold',
                  fontSize:'18'
                }}>URL Link Shorter</span>
              </div>

              <div style={{
                textAlign:'center'
              }}>
                <p style={{
                  fontWeight: 'bold', 
                  marginBottom: '0.25rem'}}>Shorten your Links</p>
                <p style={{
                  fontSize: 13, 
                  color: '#666', 
                  margin: 0}}>Instant short URls for sharing</p>
              </div>

              <Button onClick={() => {
                navigate('/url-shrink')
              }} style={{ 
                width: '100%', 
                backgroundColor: '#2d4a8a', 
                border: 'none', 
                borderRadius: 8, 
                padding: '0.6rem' }}>

                Go to Link Shrinker
              </Button>
                
            </Card>
          </Col>

          <Col xs='auto'>

          {/* For QR Code Generator */}
            <Card onClick={() => {
                navigate('/qr-generate')
              }} style={{ 
              height: 300, 
              width: 250, 
              border: '1px solid #ccc', 
              borderRadius:25,
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              padding:'1.5rem' }}>
            
              <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'1rem'
              }}>
                <BsQrCodeScan style={{
                  fontSize: 60, 
                  color: '#2d4a8a' }}/>
                <span style={{
                  fontWeight:'bold',
                  fontSize:'18'
                }}>Generate QR Codes</span>
              </div>

              <div style={{
                textAlign:'center'
              }}>
                <p style={{
                  fontWeight: 'bold', 
                  marginBottom: '0.25rem'}}>Generate QR codes </p>
                <p style={{
                  fontSize: 13, 
                  color: '#666', 
                  margin: 0}}>Create QR codes for any purpose</p>
              </div>

              <Button style={{ 
                width: '100%', 
                backgroundColor: '#2d4a8a', 
                border: 'none', 
                borderRadius: 8, 
                padding: '0.6rem' }}>

                Go to QR Generator
              </Button>

              
                
            </Card>
          </Col>

          <div>
            <InfoComponent />
          </div>
        </Row>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default Home