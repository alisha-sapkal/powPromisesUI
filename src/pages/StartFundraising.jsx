import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import ThankYou from './ThankYou';

function StartFundraising() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    targetAmount: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('targetAmount', formData.targetAmount);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);

      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/fundraisers', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      toast.success('Fundraiser created successfully!');
      setShowThankYou(true);
    } catch (error) {
      console.error('Error creating fundraiser:', error);
      const errorMessage = error.response?.data?.message || 'Error creating fundraiser';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <Container className="py-5 mx-auto">
      <Card className="shadow-sm mx-auto" style={{ width: '500px' }}>
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Start Your Fundraiser</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Campaign Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a compelling title for your fundraiser"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="medical">Medical</option>
                <option value="education">Education</option>
                <option value="emergency">Emergency</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Target Amount</Form.Label>
              <Form.Control
                type="number"
                name="targetAmount"
                value={formData.targetAmount}
                onChange={handleChange}
                placeholder="Enter your fundraising goal"
                min="0"
                step="0.01"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Tell your story and explain why you need help"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Campaign Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
              />
              <Form.Text className="text-muted">
                Maximum file size: 5MB. Supported formats: JPG, JPEG, PNG, GIF
              </Form.Text>
            </Form.Group>

            <Button 
              variant="dark" 
              type="submit" 
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Fundraiser'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StartFundraising; 