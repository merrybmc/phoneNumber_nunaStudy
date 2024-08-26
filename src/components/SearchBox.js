import React from 'react';

export default function SearchBox({
  searchInput,
  setSearchInput,
  onSearchContact,
  onResetContactList,
}) {
  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div>
        <label>이름 또는 전화번호를 입력해주세요.</label>
        <input
          type='text'
          value={searchInput}
          placeholder='이름을 입력하세요'
          onChange={(e) => handleOnChangeInput(e)}
        />
      </div>
      <button onClick={onSearchContact}>찾기</button>
      <button onClick={onResetContactList}>초기화</button>
    </>
  );
}
