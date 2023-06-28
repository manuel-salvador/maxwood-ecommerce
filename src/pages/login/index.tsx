import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import PageLayout from '@/layouts/PageLayout';
import { AtIcon, CheckIcon, CloseEyeIcon, OpenEyeIcon } from '@/components/shared/Icons';
import Loader from '@/components/shared/Loader';
import LoadingPage from '@/components/pages/LoadingPage';

export default function LoginPage() {
  const [submittingForm, setSubmittingForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [longinError, setLonginError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && !submittingForm) {
      router.push('/cuenta');
    }
    if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [status]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: async (values) => {
      setLonginError(false);
      const result = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        setLonginError(true);
        setSubmittingForm(false);
      }
      if (result?.ok && submittingForm) {
        router.back();
      }
    },
  });

  const handleLogin = () => {
    if (!submittingForm) {
      setSubmittingForm(true);
    }
  };

  if (loading) return <LoadingPage />;

  return (
    <PageLayout title="Iniciar sesión" footer={false}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto mt-10 px-10 flex flex-col items-center"
      >
        <h2 className="mb-6 font-bold text-2xl md:text-3xl">Iniciar sesión</h2>
        {longinError && (
          <div className="bg-red-100 border border-red-600 text-red-600 p-1 mb-4 w-full text-center">
            Email o contraseña incorrectos
          </div>
        )}
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
            className="input pr-8"
          />
          <span className="absolute right-2 top-2">
            <AtIcon size={18} />
          </span>
        </div>
        <div className="pb-8 w-full flex justify-center relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Contraseña"
            className="input pr-8"
          />
          <span
            className="absolute right-1 top-1 cursor-pointer hover:bg-gray-200 rounded-full p-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <OpenEyeIcon size={21} /> : <CloseEyeIcon size={20} />}
          </span>
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
          onClick={handleLogin}
          className={`mt-6 button-primary text-white rounded-md py-1 w-36 h-10 block text-lg select-none ${
            submittingForm || !values.email || !values.password
              ? 'pointer-events-none bg-gray-500'
              : 'bg-primary'
          }`}
        >
          {submittingForm ? <Loader size={24} /> : 'Iniciar sesión'}
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
