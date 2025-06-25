/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
import { Button, HelperText, Label, Textarea, TextInput } from 'flowbite-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  siteKey: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({ siteKey }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<ContactFormData>();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  const onSubmit = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const { name, email, message } = data;

    // Disable form while processing submission
    setDisabled(true);

    const params = {
      from_name: name,
      message: message,
      from_email: email,
    };

    if (captchaValid) {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            ...params,
          }).toString(),
        }).then(() => {
          toggleAlert('Form submission was successful!', 'success');
          setDisabled(false);
        });

        recaptchaRef.current?.reset();
        reset();
      } catch (error) {
        console.error('Captcha validation failed', error);
        recaptchaRef.current?.setState({ value: false });
        toggleAlert('Please complete the reCAPTCHA.', 'danger');
        return;
      }
    } else {
      console.error('Captcha validation failed');
      toggleAlert('Please complete the reCAPTCHA.', 'danger');
      return;
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
        <input
          type='hidden'
          name='form-name'
          value='contact'
        />
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

        <div className='row formRow'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={onChange}
          />

          {!captchaValid && isSubmitted ? (
            <span className='errorMessage text-red-500'>
              Please complete the reCAPTCHA to submit the form.
            </span>
          ) : (
            <></>
          )}
        </div>

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
