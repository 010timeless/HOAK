import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Progress from './Progress';
// 💡 CSS 파일을 확실하게 import 해줍니다.
import './App.css'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Progress />;
  }

  // 인라인 스타일을 지우고, 고정 클래스 'app-layout-container'를 부여합니다.
  return (
    <div className="app-layout-container cover-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;