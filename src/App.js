import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Card1 from './Card1'

function App () {
  return (
    <>
      <section className='pricing py-5'>
        <Container className='container'>
          <Row className='row'>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card1
                usage='Free'
                amount='0'
                userCount='Single User'
                storageCapacity='5GB Storage'
                publicProject='Unlimited Public Projects'
                access='Community Access'
                privateProject='Unlimited Private Projects'
                phoneSupport='Dedicated Phone Support'
                subdomain='Free Subdomain'
                status='Monthly Status Reports'
                textMuted='text-muted'
                textUnMuted=''
                checkIcon='fas fa-check'
                timesIcon='fas fa-times'
              />
            </Col>

            <Col xs={12} sm={12} md={6} lg={4}>
              <Card1
                usage='plus'
                amount='9'
                userCount='5 Users'
                storageCapacity='50GB Storage'
                publicProject='Unlimited Public Projects'
                access='Community Access'
                privateProject='Unlimited Private Projects'
                phoneSupport='Dedicated Phone Support'
                subdomain='Free Subdomain'
                status='Monthly Status Reports'
                textMuted='text-muted'
                textUnMuted=''
                checkIcon='fas fa-check'
                timesIcon='fas fa-times'
              />
            </Col>

            <Col xs={12} sm={12} md={6} lg={4}>
              <Card1
                usage='pro'
                amount='49'
                userCount='Unlimited Users'
                storageCapacity='150GB Storage'
                publicProject='Unlimited Public Projects'
                access='Community Access'
                privateProject='Unlimited Private Projects'
                phoneSupport='Dedicated Phone Support'
                subdomain='Unlimited Free Subdomains'
                status='Monthly Status Reports'
                textMuted='text-muted'
                textUnMuted=''
                checkIcon='fas fa-check'
                timesIcon='fas fa-times'
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default App
