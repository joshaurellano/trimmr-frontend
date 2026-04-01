import React, { useState } from 'react'
import { Row, Col, Card, Button, Form, InputGroup, Spinner } from 'react-bootstrap'
import axios from 'axios'
import NavbarComponent from '../components/NavbarComponent'
import InfoComponent from '../components/InfoComponent'
import FooterComponent from '../components/FooterComponent'

import { API_ENDPOINT } from '../../Api.jsx'

function UrlShorter() {
  
  const [url, SetUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLinkShrinker = async () => {
    
    setShortUrl('')
    setError('')
    setLoading(true)
    try {
      const response = await axios.post(`${API_ENDPOINT}/short`,{
        url
      });
      setShortUrl(response.data.url)
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
              }}>URL Shortener</h1>
              <br />
              <div style={{
                width:'100%'}}>
              <InputGroup style={{ width: '100%' }}>
                
                <Form.Control value={url} onChange={(e) => SetUrl(e.target.value)} style={{
                  lineHeight:3}} type="text" placeholder="Enter link here" />
                <Button disabled={loading} onClick={() => {
                  handleLinkShrinker()
                }}>
                  Shrink it
                </Button>

              </InputGroup>

              {error && <>
              <span style={{color:'red'}}>{error}</span>
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

              
              {(shortUrl && !loading) &&
                (<>
                  <Card style={{
                    minHeight:'100px'}}>
                    <span style={{
                      fontSize:20,
                      fontWeight:'bold',
                      textAlign:'center'
                    }}>Your shorten link is: </span>

                    <a href={shortUrl.startsWith('http') ? shortUrl : `https://${shortUrl}`} 
                      target="_blank" 
                      rel="noreferrer" style={{
                      fontSize:24,
                      textAlign:'center'
                    }}> {shortUrl} </a>
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

export default UrlShorter
