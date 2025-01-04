/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Destrcture data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const params = {
        from_name: name,
        message: message,
        from_email: email,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        params,
        import.meta.env.VITE_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className='flex justify-center'>
      <form
        id='contact-form'
        className='flex max-w-md flex-col gap-4'
        // @ts-expect-error
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        {/* Row 1 of form */}
        <div className='row formRow'>
          <div className='col-6'>
            <Label
              htmlFor='name'
              value='Name'
            />

            <TextInput
              id='name'
              type='text'
              placeholder='Name'
              required
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
            />
            {errors.name && (
              // @ts-ignore
              <span className='errorMessage'>{errors.name.message}</span>
            )}
          </div>
          <div className='col-6'>
            <Label
              htmlFor='email1'
              value='Your email'
            />

            <TextInput
              id='name'
              type='text'
              placeholder='example@example.com'
              required
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />

            {errors.email && (
              <span className='errorMessage'>
                Please enter a valid email address
              </span>
            )}
          </div>
        </div>

        {/* Row 3 of form */}
        <div className='row formRow'>
          <div className='col'>
            <Label
              htmlFor='message'
              value='Your Message'
            />
            <Textarea
              id='message'
              placeholder='Your message...'
              {...register('message', {
                required: true,
              })}
            />
            {errors.message && (
              <span className='errorMessage'>Please enter a message</span>
            )}
          </div>
        </div>

        <Button
          disabled={disabled}
          type='submit'>
          Submit
        </Button>
      </form>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'>
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
