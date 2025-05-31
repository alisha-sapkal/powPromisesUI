import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function ThankYou() {
  return (
    <Container className="py-5 mx-auto">
      <Card className="shadow-sm mx-auto text-center" style={{ width: '500px' }}>
        <Card.Body className="p-5">
          <CheckCircle size={64} className="text-success mb-4" />
          <h2 className="mb-4">Thank You!</h2>
          <p className="text-muted mb-4">
            Your fundraiser has been created successfully. We're reviewing it and will make it live soon.
          </p>
          <div className="d-grid gap-3">
            <Link to="/">
              <Button variant="dark" className="w-100">
                Go to home page
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ThankYou; 