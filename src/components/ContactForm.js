import React from 'react';

export default function ContactForm() {
  return (
    <>
      <form>
        <div>
          <label>이름</label>
          <input type='text' placeholder='이름을 입력하세요' />
        </div>
        <div>
          <label>전화번호</label>
          <input type='number' placeholder='전화번호를 입력해주세요' />
        </div>
        <button>추가</button>
      </form>
    </>
  );
}
