import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/shared/Icons';
import PageLayout from '@/layouts/PageLayout';
import Loader from '@/components/shared/Loader';

const isRequired = 'Campo requerido';

const validationSchema = Yup.object({
  name: Yup.string().required(isRequired).min(3, 'Minimo 3 carácteres'),
  email: Yup.string()
    .required(isRequired)
    .email('Email no válido')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email no válido'),
  message: Yup.string().required(isRequired),
});

export default function ContactPage() {
  const [submittingForm, setSubmittingForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        console.log(values);
        setSubmittedSuccessfully(true);
      }, 2000);
    },
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (submittingForm) {
      timeout = setTimeout(() => {
        setSubmittingForm(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [submittingForm]);

  const handleLogin = () => {
    if (!submitted) {
      setSubmitted(true);
    }
    if (!submittingForm) {
      setSubmittingForm(true);
    }
  };

  return (
    <PageLayout title="Contacto" className="flex flex-col md:flex-row">
      <div
        id="info"
        className="text-center md:text-left md:w-1/3 bg-secondary text-white p-8 flex flex-col justify-center gap-6"
      >
        <div>
          <h3 className="text-xl tracking-wider">UBICACIÓN</h3>
          <p>Av. Siempre Viva 123, CABA, Argentina</p>
        </div>
        <div>
          <h3 className="text-xl tracking-wider">SÍGUENOS</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://www.facebook.com/" referrerPolicy="no-referrer" target="_blank">
              <FacebookIcon color="white" />
            </a>
            <a href="https://www.instagram.com/" referrerPolicy="no-referrer" target="_blank">
              <InstagramIcon color="white" />
            </a>
            <a href="https://twitter.com/" referrerPolicy="no-referrer" target="_blank">
              <TwitterIcon color="white" />
            </a>
          </div>
        </div>
        <span>© 2023 Política de privacidad</span>
      </div>
      <div id="form" className="md:w-2/3 flex justify-center items-center py-4">
        {submittedSuccessfully ? (
          <div className="text-center my-8 md:my-0">
            <p>Mensaje enviado correctamente ✔</p>
            <p>¡Te responderemos a la brevedad!</p>
          </div>
        ) : (
          <form className="max-w-md w-full p-4" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4 text-center">Contactanos</h1>
            <div className="relative pb-5 flex flex-col gap-2 w-full">
              <label htmlFor="name" className="font-semibold">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                className="input"
                onChange={handleChange}
                placeholder="ej. Jhon Doe"
                autoComplete="off"
                required
              />
              <span
                className={`text-red-600 absolute bottom-0 transition-opacity ${
                  errors.name && submitted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {errors.name}
              </span>
            </div>
            <div className="relative pb-5 flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                className="input"
                onChange={handleChange}
                placeholder="ej. example@example.com"
                autoComplete="off"
                required
              />
              <span
                className={`text-red-600 absolute bottom-0 transition-opacity ${
                  errors.email && submitted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {errors.email}
              </span>
            </div>
            <div className="relative pb-5 flex flex-col gap-2 w-full">
              <label htmlFor="message" className="font-semibold">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                value={values.message}
                className="input"
                onChange={handleChange}
                placeholder="ej. Mensaje de ejemplo"
                autoComplete="off"
                rows={3}
                required
              />
              <span
                className={`text-red-600 absolute bottom-0 transition-opacity ${
                  errors.message && submitted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {errors.message}
              </span>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className={`mt-6 mx-auto button-primary text-white rounded-md py-1 w-36 h-10 block text-lg select-none ${
                submittingForm || !values.email || !values.name || !values.message
                  ? 'pointer-events-none bg-gray-500'
                  : 'bg-primary'
              }`}
            >
              {submittingForm ? <Loader size={24} /> : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </PageLayout>
  );
}
