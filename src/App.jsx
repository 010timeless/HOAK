import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
// 💡 더 이상 사용하지 않는 Progress import는 제거합니다.
import './App.css'; 

function App() {
  // 프로그레스 바 관련 isLoading 상태 및 2초 타이머(useEffect) 로직을 모두 삭제했습니다.

  return (
    <div className="app-layout-container cover-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;