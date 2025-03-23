import './style.css';
import './schedule.css';
import './common.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
// import useGemini from './hooks/useGemini';

function App() {
  const [modalState, setModalState] = useState(false);

  // useGemini();

  return (
    <>
      <Header setModalState={setModalState} />
      <Nav modalState={modalState} setModalState={setModalState} />
      <Main />
    </>
  );
}

export default App;
