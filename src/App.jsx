import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Progress from './Progress';

// assets 폴더의 배경 이미지
import hoakBackground from './assets/hoak_background_8.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${hoakBackground})`,
    backgroundSize: '65% auto',
    backgroundPosition: '10vh 2vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  };

  if (isLoading) {
    return <Progress />;
  }

  // 로딩 완료 후 전체 레이아웃이 화면에 노출될 때 fade-in-bg 클래스가 작동합니다.
  return (
    <div style={backgroundStyle} className="cover-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;