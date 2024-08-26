import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const { contactList } = useSelector((state) => state);
  const [filteredContactList, setFilteredContactList] = useState(contactList);
  const [searchInput, setSearchInput] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredContactList(contactList);
  }, [contactList]);

  const onSearchContact = () => {
    const newFilteredContactList = contactList.filter(
      (item) =>
        String(item.name).includes(searchInput) || String(item.phoneNumber).includes(searchInput)
    );
    console.log(newFilteredContactList);

    setFilteredContactList(newFilteredContactList);
  };

  const onResetContactList = () => {
    setFilteredContactList(contactList);
    setSearchInput('');
  };

  const onDeleteContact = (id) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  return (
    <>
      <SearchBox
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearchContact={onSearchContact}
        onResetContactList={onResetContactList}
      />
      {filteredContactList.map((item) => (
        <ContactItem item={item} onDeleteContact={onDeleteContact} />
      ))}
    </>
  );
}
