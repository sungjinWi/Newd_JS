이번주 안에 혼자 게시판 작성하기 DB까지

게시판 list : 
    제목 누르면 view로 가기
    글쓰기 버튼 write

게시판 view:
    뒤로가기
    수정하기
    삭제하기

게시판 글쓰기:
    등록하기
    목록가기

게시판 수정:
    수정하기
    목록가기



POST는 대부분 res.redirect로 다시 이동


```javascript
GET /borad/list
GET /borad/view
GET /borad/write
GET /borad/update

POST /board/delete
POST /board/write
POST /board/update
```