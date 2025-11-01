
import React from 'react';
import IconPhone from '../icons/IconPhone';
import IconEmail from '../icons/IconEmail';
import IconInfo from './contact/IconInfo';
import { Controller, useForm } from 'react-hook-form';
import FormElement from './contact/FormElement';
import toast from "react-hot-toast";

function Contact() {
  const {
    control,
    handleSubmit,
    reset, // to clear the form fields after submission
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    // Display success message
    toast.success('Form is successfully submitted!');
    console.log('Submitted Data:', data);

    // Reset the form fields
    reset();
  };

  return (
    <>
      <div>
        <div className="x1:container mx-auto mb-32">
          <div
            className="flex justify-center"
            style={{
              background: 'radial-gradient(circle, rgb(17 12 13) 40%, rgb(17 7 9) 100%)',
              height: '250px',
            }}
          >

          </div>
          <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
            <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">

              <div className="grid grid-cols-2 gap-x-6 mb-12 max-auto">
                <IconInfo icon={<IconEmail />} text={<span className="text-blue-500">bookhaven627@gmail.com</span>} />
                <IconInfo icon={<IconPhone />} text={<span className="text-blue-500">+91 7673783298</span>} />
              </div>

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormElement
                        type="text"
                        label="Name"
                        placeholder="Enter name here..."
                        fieldRef={field}
                        hasError={errors.name?.type === 'required'}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormElement
                        type="email"
                        label="Email"
                        placeholder="Enter email here..."
                        fieldRef={field}
                        hasError={errors.email?.type === 'required'}
                      />
                    )}
                  />
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormElement
                        type="textarea"
                        label="Message"
                        placeholder="Enter message here..."
                        fieldRef={field}
                        hasError={errors.message?.type === 'required'}
                      />
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-pink-600 text-white font-medium uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:outline-none focus:ring-0 active:bg-pink-800"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

