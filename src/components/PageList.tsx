import React from "react";
import { PageListStyle, Page } from "./styles";

function PageList() {
  const pageArray = [];

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <Page key="1" active>
      1
    </Page>,
  );

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
