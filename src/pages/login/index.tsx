import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import { AtIcon, CheckIcon, ErrorIcon, LockIcon } from '@/components/shared/Icons';

const isRequired = 'Campo requerido';
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email no válido')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email no válido')
    .required(isRequired),
  password: Yup.string().required(isRequired).min(8, 'Minimo 8 carácteres'),
  remember: Yup.boolean(),
});

export default function LoginPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <PageLayout title="Iniciar sesión" footer={false}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto mt-10 px-10 flex flex-col items-center"
      >
        <h2 className="mb-6 font-bold text-2xl md:text-3xl">Iniciar sesión</h2>
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
            className={`input pr-8 ${submitted && errors.email ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <AtIcon size={18} />
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.email ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.email}</span>
          </div>
        </div>
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Contraseña"
            className={`input pr-8 ${submitted && errors.password ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <LockIcon size={18} />
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.password ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.password}</span>
          </div>
        </div>

        <label htmlFor="remember" className="flex self-start items-center cursor-pointer">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            onChange={handleChange}
            className="hidden"
          />
          <div
            className={`w-5 h-5 mr-2 cursor-pointer border-2 flex justify-center items-center transition-all rounded-sm ${
              values.remember ? 'border-secondary bg-secondary' : 'border-black'
            }`}
          >
            {values.remember && <CheckIcon size={14} />}
          </div>
          <span className="leading-none">Recordarme</span>
        </label>
        <button
          type="submit"
          onClick={() => setSubmitted(true)}
          className="mt-6 button-primary bg-primary text-white rounded-md py-1 text-lg"
        >
          Iniciar sesión
        </button>
      </form>
      <div className="flex flex-col items-center gap-4 mt-6">
        <Link href="/" className="text-secondary link-animation after:bg-secondary">
          Recuperar contraseña
        </Link>
        <div>
          <span>¿No tenés cuenta?</span>
          <Link href="/register" className="ml-4 text-secondary link-animation after:bg-secondary">
            Registrate
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}