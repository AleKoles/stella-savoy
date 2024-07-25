import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id',
        template_params: templateParams,
      });
      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea {...register('message', { required: true })}></textarea>
        {errors.message && <span>This field is required</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
