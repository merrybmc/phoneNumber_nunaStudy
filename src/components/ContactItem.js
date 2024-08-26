import React from 'react';

export default function ContactItem({ item, onDeleteContact }) {
  return (
    <>
      <div>
        <img
          width={50}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg'
        />
        <p>{item.name}</p>
        <p>{item.phoneNumber}</p>
        <button>수정</button>
        <button onClick={() => onDeleteContact(item.id)}>삭제</button>
      </div>
    </>
  );
}
