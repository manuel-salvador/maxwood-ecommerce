import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import { AtIcon, CheckIcon, ErrorIcon, LockIcon, UserIcon } from '@/components/shared/Icons';

const isRequired = 'Campo requerido';
const validationSchema = Yup.object({
  fullName: Yup.string().min(4, 'Minimo 4 carácteres').required(isRequired),
  email: Yup.string()
    .email('Email no válido')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email no válido')
    .required(isRequired),
  password: Yup.string().required(isRequired).min(8, 'Minimo 8 carácteres'),
  repeatPassword: Yup.string()
    .required(isRequired)
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
  terms: Yup.boolean().isTrue('Debe aceptar los términos y condiciones'),
});

export default function LoginPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      fullName: '',
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
            id="fullName"
            name="fullName"
            onChange={handleChange}
            value={values.fullName}
            placeholder="Nombre completo"
            className={`input pr-8 ${submitted && errors.fullName ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <UserIcon size={18} />
          </span>
          <div
            className={`input-error-message overflow-hidden ${
              submitted && errors.fullName ? 'opacity-100 h-auto' : 'opacity-0 h-0'
            }`}
          >
            <ErrorIcon size={18} />
            <span>{errors.fullName}</span>
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
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
            value={values.repeatPassword}
            placeholder="Repetir contraseña"
            className={`input pr-8 ${submitted && errors.repeatPassword ? 'border-red-600' : null}`}
          />
          <span className="absolute right-2 top-2">
            <LockIcon size={18} />
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
