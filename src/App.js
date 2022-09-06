import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function App() {
  return (
    <>
    <section className="pricing py-5">
      <Container className="container">
         <Row className="row">

            <Col xs={12} sm={4} md={4} lg={4}>
              <Card1></Card1>
            </Col>

            <Col xs={12} sm={4} md={4} lg={4}>
              <Card2></Card2>
            </Col>

            <Col xs={12} sm={4} md={4} lg={4}>
              <Card3></Card3>
            </Col>
        </Row>
     </Container>
    </section>
    </>
  );
}

export default App;