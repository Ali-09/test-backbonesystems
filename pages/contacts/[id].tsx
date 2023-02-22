import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/src/hooks/useRedux';
import { putContact, fetchContact } from '@/src/store/contactSlice';
import { EditContact } from '@/src/components';
import type { NewContactData } from '@/src/components';

const validateRules = {
  firstName: {
    required: {
      value: true,
      message: 'Se requiere el nombre',
    },
  },
  lastName: {
    required: {
      value: true,
      message: 'Se requieren los apellidos',
    },
  },
  email: {
    required: {
      value: true,
      message: 'Se requiere el email',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'No es un correo valido',
    },
  },
  phone: {
    required: {
      value: true,
      message: 'Se requieren el telefono',
    },
  },
};

export default function Edit() {
  const contact = useAppSelector((state) => state.contacts.contact);
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<NewContactData>();
  const dispatch = useAppDispatch();
  const loading: string = useAppSelector((state) => state.contacts.loading);
  const error = useAppSelector((state) => state.contacts.error);
  const message = useAppSelector((state) => state.contacts.message);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) dispatch(fetchContact(id as string));
  }, [dispatch, id]);

  useMemo(() => {
    reset(contact);
  }, [contact, reset]);

  const onAddContact = (data: NewContactData) => {
    const idContact = id as string;
    dispatch(putContact({ data, id: idContact }));
  };

  const propsNewContact = {
    handleSubmit,
    register,
    error,
    errors,
    onGoListPage: () => router.push('/'),
    loading,
    onAddContact,
    message,
    validateRules,
    isEdit: true,
  };

  return (
    <>
      <Head>
        <title>Test Backbone - Modificar contacto</title>
      </Head>
      <EditContact formContactProps={propsNewContact} />
    </>
  );
}
