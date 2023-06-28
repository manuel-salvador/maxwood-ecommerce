import type { GetServerSidePropsContext } from 'next';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { getSession } from 'next-auth/react';

import PageLayout from '@/layouts/PageLayout';
import {
  AtIcon,
  CheckIcon,
  CloseEyeIcon,
  ErrorIcon,
  OpenEyeIcon,
  UserIcon,
} from '@/components/shared/Icons';

const isRequired = 'Campo requerido';
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo letras A-Z')
    .min(3, 'Minimo 3 carácteres')
    .required(isRequired),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo letras A-Z')
    .min(3, 'Minimo 3 carácteres')
    .required(isRequired),
  email: Yup.string()
    .email('Email no válido')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email no válido')
    .required(isRequired),
  password: Yup.string()
    .required(isRequired)
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Máximo 20 caracteres'),
  repeatPassword: Yup.string()
    .required(isRequired)
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
  terms: Yup.boolean().isTrue('Debe aceptar los términos y condiciones'),
});

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <PageLayout title="Registro" footer={false}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto mt-10 px-10 flex flex-col items-center"
      >
        <h2 className="mb-6 font-bold text-2xl md:text-3xl">Registro</h2>
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
            placeholder="Nombre"
            className={`input pr-8 ${submitted && errors.name ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <UserIcon size={18} />
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.name ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.name}</span>
          </div>
        </div>
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            placeholder="Apellido"
            className={`input pr-8 ${submitted && errors.lastName ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <UserIcon size={18} />
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.lastName ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.lastName}</span>
          </div>
        </div>
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
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Contraseña"
            className={`input pr-8 ${submitted && errors.password ? 'border-red-600' : null}`}
          />
          <span
            className="absolute right-1 top-1 cursor-pointer hover:bg-gray-200 rounded-full p-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <OpenEyeIcon size={21} /> : <CloseEyeIcon size={20} />}
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
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type={showRepeatPassword ? 'text' : 'password'}
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
            value={values.repeatPassword}
            placeholder="Repetir contraseña"
            className={`input pr-8 ${submitted && errors.repeatPassword ? 'border-red-600' : null}`}
          />
          <span
            className="absolute right-1 top-1 cursor-pointer hover:bg-gray-200 rounded-full p-1"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            {showRepeatPassword ? <OpenEyeIcon size={21} /> : <CloseEyeIcon size={20} />}
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.repeatPassword ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.repeatPassword}</span>
          </div>
        </div>

        <label htmlFor="terms" className=" self-start items-center cursor-pointer">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-5 h-5 mr-2 cursor-pointer border-2 flex justify-center items-center transition-all rounded-sm ${
                submitted && errors.terms
                  ? 'border-red-600'
                  : values.terms
                  ? 'border-secondary bg-secondary'
                  : 'border-black'
              }`}
            >
              {values.terms && <CheckIcon size={14} />}
            </div>
            <span className="leading-none">Acepto los términos y condiciones</span>
          </div>
        </label>
        {submitted && errors.terms ? (
          <div className="flex items-center gap-2">
            <ErrorIcon size={14} />
            <span className="text-sm text-red-600">{errors.terms}</span>
          </div>
        ) : null}
        <button
          type="submit"
          onClick={() => setSubmitted(true)}
          className="mt-6 button-primary bg-primary text-white rounded-md py-1 text-lg"
        >
          Registrarme
        </button>
      </form>
      <div className="flex flex-col items-center gap-4 mt-6">
        <div>
          <span>¿Ya tenés cuenta?</span>
          <Link href="/login" className="ml-4 text-secondary link-animation after:bg-secondary">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session && session.user) {
    return {
      redirect: {
        destination: '/cuenta',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
