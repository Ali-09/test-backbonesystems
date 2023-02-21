import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { deleteContact, fetchContact } from '@/src/store/contactSlice';
import { useAppDispatch, useAppSelector } from '@/src/hooks/useRedux';
import { DeleteContact } from '@/src/components';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state) => state.contacts.contact);
  const message = useAppSelector((state) => state.contacts.message);
  const loading = useAppSelector((state) => state.contacts.loading);

  useEffect(() => {
    if (id) dispatch(fetchContact(id as string));
  }, [dispatch, id]);

  const onGoListPage = () => router.push('/');

  const onDeleteContact = () => {
    dispatch(deleteContact(id as string));
  };

  const infoDeleteProps = {
    contact,
    onDeleteContact,
    loading,
  };

  return (
    <>
      <Head>
        <title>Test Backbone - Eliminar contacto</title>
      </Head>

      <DeleteContact
        infoDeleteProps={infoDeleteProps}
        message={message}
        onGoListPage={onGoListPage}
      />

    </>
  );
}
