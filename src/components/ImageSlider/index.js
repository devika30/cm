import { Container, Row, Col, Card } from "react-bootstrap";
import { imageData } from "./data";

const DesktopImageGrid = () => {
  return (
    <Container>
      <Row>
        {imageData.slice(0, 3).map((image, index) => (
          <Col key={index} lg={4}>
            <Card>
              <div className="d-flex justify-content-center p-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="img-fluid"
                  width={100}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {imageData.slice(3).map((image, index) => (
          <Col key={index} lg={4} className="mt-4">
            <Card>
              <div className="d-flex justify-content-center p-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="img-fluid"
                  width={100}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ImageSlider = () => {
  return (
    <div>
      <DesktopImageGrid />
    </div>
  );
};

export default ImageSlider;