import './App.css';
import * as S from './App.styled';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
function App() {
  return (
    <div>
      <S.Title className='title'>연락처</S.Title>
      <S.RowFlex>
        <S.FlexBox>
          <ContactForm />
        </S.FlexBox>
        <S.FlexBox>
          <ContactList />
        </S.FlexBox>
      </S.RowFlex>
    </div>
  );
}

export default App;
