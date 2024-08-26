import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const getName = (e) => {
    if (e.target.type === 'text') setName(e.target.value);
    if (e.target.type === 'number') setPhoneNumber(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
  };

  return (
    <>
      <form onSubmit={addContact}>
        <div>
          <label>이름</label>
          <input type='text' placeholder='이름을 입력하세요' onChange={(e) => getName(e)} />
        </div>
        <div>
          <label>전화번호</label>
          <input type='number' placeholder='전화번호를 입력해주세요' onChange={(e) => getName(e)} />
        </div>
        <button>추가</button>
      </form>
    </>
  );
}
