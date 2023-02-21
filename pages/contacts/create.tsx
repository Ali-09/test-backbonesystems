import Head from "next/head";
import { useMemo } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { postContact } from "@/src/store/contactSlice";
import { NewContact } from "@/src/components"
import type { NewContactData } from "@/src/components"

const validateRules = {
  firstName: {
    required: {
      value: true,
      message: "Se requiere el nombre"
    },
  },
  lastName: {
    required: {
      value: true,
      message: "Se requieren los apellidos"
    },
  },
  email: {
    required: {
      value: true,
      message: "Se requiere el email"
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "No es un correo valido"
    }
  },
  phone: {
    required: {
      value: true,
      message: "Se requieren el telefono"
    },
  },
}

export default function Create() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewContactData>();
  const dispatch = useAppDispatch()
  const loading: string = useAppSelector(state => state.contacts.loading);
  const error = useAppSelector(state => state.contacts.error);
  const message = useAppSelector(state => state.contacts.message);
  const router = useRouter();

  useMemo(() => {
    if(loading === "succeeded" && !error) reset()
  }, [loading, error])
  
  const onAddContact = (data: NewContactData) => {
    dispatch(postContact(data))
  }

  const propsNewContact = {
    handleSubmit,
    register,
    error,
    errors,
    onGoListPage: () => router.push("/"),
    loading,
    onAddContact,
    message,
    validateRules
  }

  return (
    <>
      <Head>
        <title>Test Backbone - Nuevo contacto</title>
      </Head>
      <NewContact formContactProps={propsNewContact}/>
    </>
  )
}
