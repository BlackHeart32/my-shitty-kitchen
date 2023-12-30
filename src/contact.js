import React from 'react';
import { Form, Button } from 'react-bootstrap-v5';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <Form>
        {/* Add your contact form fields here */}
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Contact;
