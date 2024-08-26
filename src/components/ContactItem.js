import React from 'react';
import * as S from './ContactItem.styled';

export default function ContactItem({ item, onDeleteContact }) {
  return (
    <>
      <S.ContactItemContainer>
        <S.ContactImage
          width={50}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg'
        />
        <S.ContactBox>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </S.ContactBox>
        <button onClick={() => onDeleteContact(item.id)}>삭제</button>
      </S.ContactItemContainer>
    </>
  );
}
