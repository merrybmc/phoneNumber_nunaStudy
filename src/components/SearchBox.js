import React from 'react';
import * as S from './SearchBox.styled';

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
      <S.SearchContainer>
        <input
          type='text'
          value={searchInput}
          placeholder='이름을 입력하세요'
          onChange={(e) => handleOnChangeInput(e)}
        />
        <button onClick={onSearchContact}>찾기</button>
        <button onClick={onResetContactList}>초기화</button>
      </S.SearchContainer>
    </>
  );
}
