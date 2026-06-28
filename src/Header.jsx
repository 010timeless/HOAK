import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      {/* 좌측에 기존 타이틀이나 로고가 있다면 여기에 위치합니다 */}
      <div className="header-left">
        {/* 예: <h1 className="header-logo">hoak</h1> */}
      </div>

      {/* 우상귀에 밀착시킬 위트 있는 문구 박스 */}
      <div className="header-motto">
        <span className="motto-highlight">NOW or NEVER</span>
        <span className="motto-sub">, When nothing goes right, go left.</span>
      </div>
    </header>
  );
}

export default Header;