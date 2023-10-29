import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Container, Row } from 'react-bootstrap';


function AboutUs() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <h2>Sobre nosotros</h2>
          </Col>
          </Row>
          <Row>
          <Col md={9}>
            <Row className= 'align-items-center'>
              <Col md={6}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/R.2cb1ad0064a5168109671cc46c78b266?rik=8m1wa%2fkjg0eVgw&riu=http%3a%2f%2fverfachadasdecasas.com%2fwp-content%2fuploads%2f2016%2f06%2ffrentes-modernos-para-locales-comerciales.jpg&ehk=iXOHPswoLeTW2NUJvFlrWEeCrRkXVxJzG1mWqG1U34o%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <Card.Body>
                    <Card.Title>Locales</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.4lLmwMw2zN0nOVC6Mp4VPAHaE8?pid=ImgDet&rs=1"
                  />
                  <Card.Body>
                    <Card.Title>Equipo</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default AboutUs;