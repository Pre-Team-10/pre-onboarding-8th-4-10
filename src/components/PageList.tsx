import React from "react";
import { Page, PageListStyle } from "../styles/styles";

function PageList({
  numberOfPages,
  nowPage,
  setNowPage,
}: {
  numberOfPages: number;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pageArray = [];
  for (let i = 0; i < numberOfPages; i += 1) {
    const page = i + 1;
    pageArray.push(
      <Page
        key={page}
        active={page === nowPage + 1}
        onClick={() => setNowPage(i)}
      >
        {page}
      </Page>,
    );
  }
  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
