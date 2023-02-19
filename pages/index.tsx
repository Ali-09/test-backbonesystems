import Head from "next/head"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux"
import { HomeTemplate } from "@/src/components"
import { fetchContacts } from "@/src/store/contactSlice"

export default function Home() {

  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.contacts.data)
  const [emailSearch, setEmailSearch] = useState("")
  const loading = useAppSelector(state => state.contacts.loading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    if(emailSearch) dispatch(fetchContacts({page:1, search:emailSearch}))
    else dispatch(fetchContacts())
  },[emailSearch])

  const tableContactsProps = {
    data,
    onChangePage: (page:number) => dispatch(fetchContacts({page, search: emailSearch})),
    search: emailSearch,
    handleSetSearch: (val:string) => setEmailSearch(val),
    loading
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
