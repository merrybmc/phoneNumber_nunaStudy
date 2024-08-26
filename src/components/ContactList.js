import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { contactList } = useSelector((state) => state);
  return (
    <>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </>
  );
}
