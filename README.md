# API 서버와 통신해서 작동하는 댓글 프로젝트 (세션 4주차)

**목차**

- [1.프로젝트 소개](#프로젝트-소개)
- [2.팀원 소개](#팀원-소개)
- [3.구현 기능](#구현-기능)
- [4.프로젝트 폴더 구조](#프로젝트-폴더-구조)
- [5.Best Practice 선정 사례](#Best-Practice-선정-사례)

## 프로젝트 소개

개발 기간: 23.01.16 ~ 23.01.19

### 배포 링크

[배포 링크](https://pre-onboarding-8th-4-10.vercel.app)

### 구동 방법

```tsx
npm install
npm start
```

### api 서버 구동 방법

```tsx
npm install
npm run api
```

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/redux-4B32C3?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
	<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## 팀원 소개

---

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/jdy8739"><img src="https://avatars.githubusercontent.com/u/83811826?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀장: 정도영 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/smash009"><img src="https://avatars.githubusercontent.com/u/46629029?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 남장현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/SkyRain1225"><img src="https://avatars.githubusercontent.com/u/97310823?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 오경준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ddaisylee"><img src="https://avatars.githubusercontent.com/u/88873956?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 이은지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jazzyfact"><img src="https://avatars.githubusercontent.com/u/51365114?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 임혜미</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

## 구현 기능

---

## 📝 구현 기능 목록

<br>

### **👋 1. 이슈 목록 보기**

    - [x] 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현.
    - [x] 페이지네이션 구현.
    - [x] 댓글 작성, 수정, 삭제 후 동작에 대한 요구사항 구현.

<br>

- [x] 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 및 이후 동작 구현 

  - [x] 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화.
  - [x] 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화.
  - [x] 삭제하고 난 뒤: 1페이지로 이동.

<br>

- [x] 페이지네이션 구현

  - [x] 댓글 배열의 총 길이에 따른 구분 버튼 및 페이지네이션 기능 제작.

<br>

### **👋 구현 조건**

- [x] React, Redux 사용 필수.
- [x] Redux logger, Redux-Devtools 설정 필수.
- [x] Redux를 이용한 비동기 처리 필수.

## 프로젝트 폴더 구조

---

```tsx
src
 ┣ apis
 ┃ ┗ apis.ts
 ┣ components
 ┃ ┣ CommentList.tsx
 ┃ ┣ Form.tsx
 ┃ ┗ PageList.tsx
 ┣ const
 ┃ ┣ endPoints.ts
 ┃ ┣ errorDescs.ts
 ┃ ┗ status.ts
 ┣ containers
 ┃ ┣ CommentListContainer.tsx
 ┣ store
 ┃ ┣ commentsSlice.tsx
 ┃ ┗ store.ts
 ┣ styles
 ┃ ┗ styles.ts
 ┣ types
 ┃ ┗ types.ts
 ┣ App.tsx
 ┗ index.tsx
```

### apis 폴더

1. json server에 CRUD요청을 수행하는 관심사의 비즈니스 로직들을 하나의 class로 구현

### components 폴더

1. 댓글, 페이지 버튼, 입력 폼을 구성하는 각 컴포넌트들 제작

### consts 폴더

1. api 요청을 수행하는 class 내부에서 사용되는 url end-point, 에러 처리 문구, 서버 상태들을 as const를 사용해 각 상수 객체로 만들어 사용할 수 있도록 처리

### containers 폴더

1. 화면에 보여질 메인 페이지 컴포넌트 작성

### store 폴더

1. 모든 전역상태를 보관하는 store와 모든 댓글들의 모음을 하나의 전역상태로 저장할 수 있도록 하는 store.ts 파일 제작
2. 이 댓글 모음의 초기상태와 이를 변경할 수 있는 action이 정의된 slice 객체 및 비동기 미들웨어 함수를 선언한 commentsSlice.ts 파일 제작

### styles 폴더

1. styled-components를 사용하여 styled 변수들을 분리하여 작성 및 보관

### types 폴더

1. 댓글 모음 객체의 타입이 선언된 파일 제작


## Best Practice 선정 사례

---

### 1. Redux middleware를 사용한 댓글 불러오기

```ts
/*
Redux의 middleware를 구현하는 createAsyncThunk 함수를 사용해 모든 댓글들을 api 호출을 통해 받아오도록 하는 함수를 제작하고
slice 객체의 extraReducers 속성 내부에 이 함수를 사용할 수 있도록 설정하여 페이지 로드, 컴포넌트 마운트 후
댓글들을 불러와 화면에 반영할 수 있도록 구현했습니다.
*/

export const fetchAllComments = createAsyncThunk(
  END_POINTS.getComments,
  async () => {
    const fetchedAllComments = await commentApiManager.fetchAllComments();
    return fetchedAllComments;
  },
);

const initialState: Array<IComment> = [];

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addNewComment: (state, { payload: newComment }: { payload: IComment }) => {
      state.unshift(newComment);
    },
    deleteComment: (state, { payload: targetId }: { payload: number }) => {
      return state.filter((comment) => comment.id !== targetId);
    },
    modifyComment: (
      state,
      { payload: modifiedComment }: { payload: IComment },
    ) => {
      const targetCommentIndex = state.findIndex(
        (comment) => comment.id === modifiedComment.id,
      );
      state.splice(targetCommentIndex, 1, modifiedComment);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllComments.fulfilled,
      (state, { payload: fetchedAllComments }) => {
        if (fetchedAllComments) return fetchedAllComments;
        return [];
      },
    );
  },
});
```

- [x] Redux를 이용한 비동기 처리 필수.

### 2. 페이지네이션

```ts
/*
현재 페이지를 컴포넌트 상태로 나타내는 nowPage 변수를 사용하여 한 화면에 보여질 댓글들의 범위를 설정하고
이 범위대로 컴포넌트가 댓글들을 보여줄 수 있도록 slice 함수를 사용해 댓글들의 배열을 조작했습니다.
*/

const SLICED_POINT = nowPage * NUM_OF_COMMENTS_PER_SINGLE_PAGE;
const SLICED_END = SLICED_POINT + NUM_OF_COMMENTS_PER_SINGLE_PAGE;
return (
  <CommentContainer>
    {comments.slice(SLICED_POINT, SLICED_END).map((comment) => 
      <Comment comment={comment} />})
```

```ts
/*
페이지네이션 버튼을 JSX 배열에 담아 해당 배열을 return문 내부에서 반환하도록 제작 및 현재 페이지의 상태값과 일치하는
버튼의 색상을 styled-components의 props(active)를 통하여 식별할 수 있도록 구현했습니다.
*/

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
```

- [x] 댓글 배열의 총 길이에 따른 구분 버튼 및 페이지네이션 기능 제작.

### 3. 댓글 CRUD요청을 수행하는 관심사의 비즈니스 로직들을 하나의 class로 구현

```ts
/*
json server에 api 요청을 수행한다는 하나의 관심사를 수행하는 함수들을 추상화하여 하나의 interface로 만들고,
그 interface를 구현하는 class를 제작했습니다.
외부에 노출될 필요 없는 axios 객체는 private 키워드를 붙여 캡슐화를 수행하였으며,
url 주소 역시 class 내부에서 private, readonly 키워드를 붙여 class 내부의 응집도를 높이고자 하였습니다. 
*/

interface ICommentApiManager {
  fetchAllComments: () => Promise<Array<IComment> | null>;
  postNewComment: (newComment: IComment) => Promise<boolean>;
  deleteComment: (commentId: number) => Promise<boolean>;
  modifyComment: (newComment: IComment) => Promise<boolean>;
}

class CommentApiManager implements ICommentApiManager {
  private static readonly BASE_URL = "http://localhost:4000";

  private static commentAxios: Axios;

  constructor() {
    CommentApiManager.commentAxios = axios.create({
      baseURL: CommentApiManager.BASE_URL,
    });
  }

  private static showErrorToast(errorDesc: string) {
    toast.error(errorDesc);
  }

  async fetchAllComments() {
    try {
      const { data: fetchAllComments } =
        await CommentApiManager.commentAxios.get<IComment[]>(
          END_POINTS.getComments,
        );
      return fetchAllComments.reverse();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.fetchError);
      return null;
    }
  }

  async postNewComment(newComment: IComment) {
    try {
      const { status } = await CommentApiManager.commentAxios.post(
        END_POINTS.postComments,
        newComment,
      );
      if (status === SERVER_STATUS.POST_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.postError);
      return false;
    }
  }

  async deleteComment(commentId: number) {
    try {
      const { status } = await CommentApiManager.commentAxios.delete(
        `${END_POINTS.deleteComments}/${commentId}`,
      );
      if (status === SERVER_STATUS.CHANGE_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.deleteError);
      return false;
    }
  }

  async modifyComment(modifiedComment: IComment) {
    try {
      const { status } = await CommentApiManager.commentAxios.put(
        `${END_POINTS.putComments}/${modifiedComment.id}`,
        modifiedComment,
      );
      if (status === SERVER_STATUS.CHANGE_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.modifyError);
      return false;
    }
  }
}
```

- [x] 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현.

### 4. 댓글 작성, 수정, 삭제 후 동작 처리

```ts
/*
현재 페이지의 상태를 변경하는 setState 함수를 통해 댓글 작성, 수정, 삭제 유무에 따라 api 요청 완료 후
페이지 상태의 변경을 구현했습니다.
또한, 모든 input 태그의 값을 초기화하는 makeAllInputsVacant 함수를 선언하여 이 함수를 api 요청 종류의
분기에 따른 각 코드블럭에서 이를 재사용하여 코드 길이를 줄일 수 있도록 제작했습니다.
*/

const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (isAllInputsNotNull) {
    const makeAllInputsVacant = () => {
      urlCurrent.value = "";
      authorCurrent.value = "";
      contentCurrent.value = "";
      ceatedAtCurrent.value = "";
    };
    const newComment = {
      profile_url: urlCurrent.value,
      author: authorCurrent.value,
      content: contentCurrent.value,
      createdAt: ceatedAtCurrent.value,
      id: targetComment?.id || lastCommentId + 1,
    };
    if (targetComment) {
      const isModifySuccessful = await commentApiManager.modifyComment(
        newComment,
      );
      if (isModifySuccessful) {
        makeAllInputsVacant();
        dispatch(modifyComment(newComment));
        setTargetComment(undefined);
      }
    } else {
      const isPostSuccessful = await commentApiManager.postNewComment(
        newComment,
      );
      if (isPostSuccessful) {
        makeAllInputsVacant();
        dispatch(addNewComment(newComment));
        setNowPage(0);
      }
    }
  }
};
```

- [x] 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화.
- [x] 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화.
- [x] 삭제하고 난 뒤: 1페이지로 이동.

