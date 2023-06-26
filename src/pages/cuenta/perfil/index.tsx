import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';

import { EditIcon } from '@/components/shared/Icons';
import AccountLayout from '@/layouts/AccountLayout';
import LoadingPage from '@/components/pages/LoadingPage';

const isRequired = 'Campo requerido';

const validationSchema = Yup.object({
  name: Yup.string().required(isRequired).min(3, 'Minimo 3 carácteres'),
  email: Yup.string()
    .required(isRequired)
    .email('Email no válido')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email no válido'),
  phone: Yup.string()
    .required(isRequired)
    .matches(/^(\+?54\s?9\s?)?(\d{2})?\s?(\d{4})-?(\d{4}|\d{2})$/, 'Número de teléfono no válido'),
  address: Yup.string().required(isRequired),
});

export default function PerfilPage() {
  const [isEditable, setIsEditable] = useState(false);

  const { data, status } = useSession();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      name: data?.user?.name || '',
      email: data?.user?.email || '',
      phone: data?.user?.phone || '',
      address: data?.user?.address || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCancel = () => {
    setIsEditable(false);
    resetForm();
  };

  useEffect(() => {
    if (data) {
      resetForm({
        values: {
          name: data.user?.name || '',
          email: data.user?.email || '',
          phone: data.user?.phone || '',
          address: data.user?.address || '',
        },
      });
    }
  }, [data]);

  if (status === 'loading') return <LoadingPage />;

  return (
    <AccountLayout title="Perfil">
      <form className="flex flex-col items-center gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div
          className={`grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-x-4 gap-y-0  w-full max-w-xl [&>div>label]:font-semibold ${
            isEditable
              ? ''
              : '[&>div>input]:cursor-text [&>div>input]:border-transparent [&>div>input]:px-0'
          }`}
        >
          <div className="relative pb-5 flex flex-col gap-2 w-full">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              className="input"
              disabled={!isEditable}
              onChange={handleChange}
              placeholder="ej. Jhon Doe"
            />
            <span
              className={`text-red-600 absolute bottom-0 transition-opacity ${
                errors.name ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {errors.name}
            </span>
          </div>
          <div className="relative pb-5 flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              className="input"
              disabled={!isEditable}
              onChange={handleChange}
              placeholder="ej. example@example.com"
            />
            <span
              className={`text-red-600 absolute bottom-0 transition-opacity ${
                errors.email ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {errors.email}
            </span>
          </div>
          <div className="relative pb-5 flex flex-col gap-2">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              className="input"
              disabled={!isEditable}
              onChange={handleChange}
              placeholder="ej. 11 2345-6789"
            />
            <span
              className={`text-red-600 absolute bottom-0 transition-opacity ${
                errors.phone ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {errors.phone}
            </span>
          </div>
          <div className="relative pb-5 flex flex-col gap-2">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              className="input"
              disabled={!isEditable}
              onChange={handleChange}
              placeholder="ej. Calle 123, Ciudad"
            />
            <span
              className={`text-red-600 absolute bottom-0 transition-opacity ${
                errors.address ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {errors.address}
            </span>
          </div>
        </div>
        {isEditable ? (
          <div className="flex gap-8 self-center">
            <button className="button-primary bg-secondary text-white" type="submit">
              Guardar cambios
            </button>
            <button
              className="button-primary bg-red-700 text-white"
              type="reset"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="flex items-center gap-2 button-primary bg-gray-600 text-white self-center"
            onClick={() => setIsEditable(true)}
            type="button"
          >
            <span>Editar</span>
            <span>
              <EditIcon color="white" />
            </span>
          </button>
        )}
      </form>
    </AccountLayout>
  );
}
