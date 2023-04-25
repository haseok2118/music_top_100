import React, { useEffect } from "react";

import { MainContainer } from "./style";

export default function MainComp() {
  return (
    <MainContainer>
      <div>
        <h1>오늘 Top 100</h1>
      </div>
      <div>여기에는 검색할수 있는 기능과 오름차순 내림차순 버튼이 추가된다</div>
      <div>
        <div>여기에 플레이리스트를 보여준다.</div>
      </div>
    </MainContainer>
  );
}
