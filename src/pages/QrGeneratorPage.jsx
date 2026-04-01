import React, { useState } from 'react'
import { Row, Col, Card, Button, Form, InputGroup, Spinner, Image } from 'react-bootstrap'
import axios from 'axios'
import NavbarComponent from '../components/NavbarComponent'
import InfoComponent from '../components/InfoComponent'
import FooterComponent from '../components/FooterComponent'

import { API_ENDPOINT } from '../../Api.jsx'

function QRGenerator() {
  
  const [url, SetUrl] = useState('')
  const [qrCode, setqrCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleQRGenerator = async () => {
    
    setLoading(true)
    setError('')
    setqrCode('')
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/generate`,
        {url},
        {responseType:'blob'}
        )
        console.log(response.data)
      const blobURL = URL.createObjectURL(response.data)
      setqrCode(blobURL)
    } catch (error) {
      if (error.response && error.response.data instanceof Blob) {
        const text = await error.response.data.text()
        try {
          const json = JSON.parse(text)
          setError(json.detail || json.message || 'Unknown error occurred')
        } catch {
          setError(text || 'Unknown error occurred')
        }
      } else {
        setError('Unknown error occurred')
      }
    } finally{
      setLoading(false)
    }
  }
  return (
    <div style={{ 
      height: '100vh', 
      backgroundColor: '#f4f6fb', 
      overflowX: 'hidden' }}>

      <NavbarComponent />

      <div className='container'>
        <Row className='justify-content-center align-items-center'>
          <Col>
            <div style={{
              width:'100%',
              height:'100%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
            }}>
              <h1 style={{
                textAlign:'center',
                fontWeight:'bold'
              }}>QR Code Generator</h1>
              <br />
              <div style={{
                width:'100%'}}>
              <InputGroup style={{ width: '100%' }}>
                
                <Form.Control value={url} onChange={(e) => SetUrl(e.target.value)} style={{
                  lineHeight:3}} type="text" placeholder="Enter link here" />
                <Button disabled={loading} onClick={() => {
                  handleQRGenerator()
                }}>
                  Generate QR Code
                </Button>

              </InputGroup>

              {error && <>
              <span style={{color:'red', textAlign:'center'}}>{error}</span>
              </>}
              
              <br />

              {loading && (
                <div style={{width:'100%', height:'100%' ,display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <span>Processing.. Please wait</span>
                </div>
            )}

              
              {(qrCode && !loading) &&
                (<>
                  <Card style={{
                    minHeight:'100px'}}>
                    <span style={{
                      fontSize:20,
                      fontWeight:'bold',
                      textAlign:'center'
                    }}>Your QR Code is here: </span>

                    <div style={{width:'100%', display:'flex' ,justifyContent:'center'}}>
                      <Image src={qrCode} style={{height:250, width:250}} />
                    </div>
                    

                  </Card>
                </>)}
              

              <p style={{
                textAlign:'center', 
                fontSize:20}}>
                  Empower your brand with custom-shrunk URLs and smart QR codes that bridge the gap between your physical presence and digital story</p>
              </div>
            </div>
            
            <div>
              <InfoComponent />
            </div>
          </Col>
        </Row>

      </div>

      <div>
        <FooterComponent />
      </div>

    </div>
  
  )
}

export default QRGenerator
