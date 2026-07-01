import React from 'react';
import './MainContent.css';
// 1. 이미지 파일 import 추가
import hoakBackground from './assets/hoak_background_9.png'; 

function MainContent() {
  return (
    <main className="main-content-zone">
      
      {/* 2. 좌상단 기준 자동 비율 조절 배경 이미지 추가 */}
      <img 
        src={hoakBackground} 
        alt="House Of Ansan KIM Background" 
        className="hoak-bg-image"
      />

      {/* 이미지의 Shielding 우측 아래 배치될 세로 나열 문구 상자 */}
      <div className="branding-text-box">
        <p className="brand-item">gracias</p>
        <p className="brand-item">TiMELESS</p>
        <p className="brand-item">Radiation Shielding</p>
        <p className="brand-item">Architectureal Designer</p>
        <p className="brand-item">Computer Engineering</p>
        <p className="brand-item">WOOD WORK</p>
        <p className="brand-item">blog.naver.com/010timeless</p>
        <p className="brand-item">Reformed Pilates</p>
        <p className="brand-item">PUCHIE</p>
      </div>
    </main>
  );
}

export default MainContent;