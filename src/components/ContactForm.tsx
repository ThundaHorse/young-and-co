/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
import { Button, HelperText, Label, Textarea, TextInput } from 'flowbite-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  siteKey: string;
}

const ContactForm = ({ siteKey }: ContactFormProps) => {
  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });
  const [captchaValid, setCaptchaValid] = useState(false);

  // Shows alert message for form submission feedback
  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true);
      // Send value to your backend for verification
    } else {
      console.log('reCAPTCHA expired or failed.');
      setCaptchaValid(false);
    }
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      // Destrcture data object
      const { name, email, message } = data;

      // Disable form while processing submission
      setDisabled(true);
      const params = {
        from_name: name,
        message: message,
        from_email: email,
      };

      if (captchaValid) {
        // Use emailjs to email contact form data
        // await emailjs.send(
        //   import.meta.env.VITE_SERVICE_ID,
        //   import.meta.env.VITE_TEMPLATE_ID,
        //   params,
        //   import.meta.env.VITE_PUBLIC_KEY
        // );

        // Display success alert
        toggleAlert('Form submission was successful!', 'success');
      } else {
        console.error('Captcha validation failed');
        // Display error alert
        toggleAlert('Please complete the reCAPTCHA.', 'danger');
        return;
      }
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
      setCaptchaValid(false);
    }
  };

  return (
    <div className='flex justify-center col'>
      <form
        name='contact'
        method='POST'
        id='contact-form'
        className='flex max-w-md flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        data-netlify='true'>
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
              color={errors.name ? 'failure' : 'gray'}
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
              <span className='errorMessage text-red-500'>
                {errors.name?.message as string}
              </span>
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
              color={errors.name ? 'failure' : 'gray'}
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />

            {errors.email && (
              <span className='errorMessage text-red-500'>
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
              color={errors.name ? 'failure' : 'gray'}
              {...register('message', {
                required: true,
              })}
            />
            {errors.message && (
              <span className='errorMessage text-red-500'>
                Please enter a message
              </span>
            )}
          </div>
        </div>

        <ReCAPTCHA
          sitekey={siteKey}
          onChange={onChange}
        />

        {alertInfo.display && (
          <HelperText>
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5 text-red-500`}
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
          </HelperText>
        )}

        <Button
          disabled={disabled}
          type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
