import React from 'react';
import Worktime from '../components/Worktime';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-20">
      <Worktime />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
