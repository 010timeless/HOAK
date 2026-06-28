import React from 'react';
import './Footer.css';
// 1. 사용할 맹고 로고 이미지 파일을 정확히 import 합니다.
import mangoLogo from './assets/hoak_mango_49x50_0.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* 왼쪽: 기존 텍스트 정렬 그룹 */}
        <div className="footer-text-group">
          <div className="footer-row-1">NOW or NEVER</div>
          <div className="footer-row-2">GRACIAS Radiation Shielding</div>
          <div className="footer-row-3">TiMELESS, the Radiation Shielding Brand by GRACIAS</div>
          <div className="footer-row-4">House Of Ansan KIM</div>
        </div>

        {/* 오른쪽: 새로 추가되는 로고 이미지 */}
        <div className="footer-logo-group">
          <img 
            src={mangoLogo} 
            alt="Mango Logo" 
            className="footer-mango-logo" 
          />
        </div>

      </div>
    </footer>
  );
}

export default Footer;