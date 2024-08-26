import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './ContctForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const getName = (e) => {
    if (e.target.type === 'text') setName(e.target.value);
    if (e.target.type === 'number') setPhoneNumber(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      alert('이름 또는 전화번호를 입력해주세요');
      return;
    }
    e.preventDefault();
    dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
    setName('');
    setPhoneNumber('');
  };

  return (
    <>
      <form onSubmit={addContact}>
        <S.Title>연락처 추가</S.Title>
        <S.InputBox>
          <S.SubTitle>이름</S.SubTitle>
          <S.Input
            type='text'
            value={name}
            placeholder='이름을 입력하세요'
            onChange={(e) => getName(e)}
          />
        </S.InputBox>
        <S.InputBox>
          <S.SubTitle>전화번호</S.SubTitle>
          <S.Input
            type='number'
            value={phoneNumber}
            placeholder='전화번호를 입력해주세요'
            onChange={(e) => getName(e)}
          />
        </S.InputBox>
        <button>추가</button>
      </form>
    </>
  );
}
