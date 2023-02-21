import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { HomeTemplate } from "@/src/components";
import { fetchContacts } from "@/src/store/contactSlice";
import useDebounce from "@/src/hooks/useDebounce";

export default function Home() {

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.contacts.data);
  const [emailSearch, setEmailSearch] = useState("");
  const [order, setOrder] = useState(false);
  const loading = useAppSelector(state => state.contacts.loading);
  const router = useRouter();
  const currentPage = useAppSelector(state => state.contacts.data.currentPage);
  const debouncedSearch = useDebounce(emailSearch, 500);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    if(debouncedSearch) dispatch(fetchContacts({page:1, search:debouncedSearch, isOrder:order}))
    else dispatch(fetchContacts())
  },[debouncedSearch])

  const handleOrder = (checked: boolean) => {
    setOrder(checked)
    dispatch(fetchContacts({ page: currentPage, search: emailSearch, isOrder:checked}))
  }

  const tableContactsProps = {
    data,
    onChangePage: (page:number) => dispatch(fetchContacts({page, search: emailSearch, isOrder:order})),
    search: emailSearch,
    handleSetSearch: (val:string) => setEmailSearch(val),
    loading,
    onGoContactsNew: () => router.push("/contacts/create"),
    onGoContactEdit: (id: string) => router.push(`contacts/${id}`),
    onGoContactDelete: (id: string) => router.push(`contacts/${id}/delete`),
    handleOrder,
    order
  }
  
  return (
    <>
      <Head>
        <title>Test Backbone</title>
      </Head>
      <HomeTemplate tableContactsProps={tableContactsProps}/>
    </>
  )
}
