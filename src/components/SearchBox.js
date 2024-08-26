import React from 'react';

export default function SearchBox() {
  return (
    <>
      <div>
        <label>이름</label>
        <input type='text' placeholder='이름을 입력하세요' />
      </div>
      <button>찾기</button>
    </>
  );
}
