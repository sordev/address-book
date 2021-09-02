import {useEffect, useState} from "react";

export const Contacts = () => {
  const [contacts, setContacts] = useState();

  useEffect(() => {

    const c = localStorage.getItem('contacts');
    console.log(c);

  }, [])

  return <div>

  </div>
}