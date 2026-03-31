import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

import NavbarComponent from '../components/NavbarComponent'

function QrGeneratorPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f4f6fb', 
      overflowX: 'hidden' }}>

      <NavbarComponent />

      <div className='container'> 
        <Row>
          <Col xs='auto' style={{
            height:'100%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center'}}>
          
            <span>Generate QR Code</span>
          
          </Col>

          <Col xs='auto' style={{
            height:'100%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center'}}>
            
            <span>Review Panel</span>
          
          </Col>
        </Row>
      </div>
    </div>

    


    
  )
}

export default QrGeneratorPage
