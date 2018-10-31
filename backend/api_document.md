# API Document

> 개발자를 위한 글과 사람 API 문서 작성중

## User

#### /user/register/

* **`GET`** user-list

  ```json
  {
      "count": 2,
      "next": null,
      "previous": null,
      "results": [
          {
              "username": "eunhynag",
              "email": "eunhyang@google.com",
              "password": "pbkdf2_sha256$120000$8임Iv6Xek8v00Y$9oFTcCdQgzhySvayUIeCaf3rnXBRrWUNnvvLQBKpVFs=",
              "nickname": "eunhynag"
          },
          ...
      ]
  }
  ```

- **`POST`** create user
  - username
    -  CharField
    -  max_length: 150
  - email
  - password
  - nickname
    - CharField 
    - max_length: 30

#### /user/register/<user_id>/ 
- **`GET`** user-detail

  ```json
   {
       "username": "eunhynag",
       "email": "eunhyang@google.com",
       "password": "pbkdf2_sha256$120000$8임Iv6Xek8v00Y$9oFTcCdQgzhySvayUIeCaf3rnXBRrWUNnvvLQBKpVFs=",
       "nickname": "eunhynag"
   }
  ```



## Board

#### /category/ 

- **`GET`** category-list

  ```json
  {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
          {
              "name": "카테고리 이름"
          }
      ]
  }
  ```

- **`POST`** create category

  - name
    - CharField
    - max_length:30

#### /category/<category_id>/
- **`GET`** category-detail

  ```json
  {
      "name": "카테고리 이름"
  }
  ```

- **`PATCH`** update category

  - name
    - CharField
    - max_length:30

- **`DELETE`** delete category

#### /post/
   - **`GET`**  post-list 

     ```json
     {
         "count": 0,
         "next": null,
         "previous": null,
         "results": [
             
         ]
     }
     ```

   - **`POST`** create post

        -  title
             - CharField 
             - max_lenght: 200,
        - body
             - TextField
        - category
             -  category_id

#### /post/ <post_id>/
- **`GET`**  post-detail 
- **`PATCH`** update post 
  - title
    * CharField

    - max_lenght: 200,
  - body

    - TextField
  - category

    -  category_id
- **`DELETE`** delete post

#### /post/<post_id>/comment/ 

- **`GET`**  comment-list
- **`POST`**  create comment

#### /post/<post_id>/comment/ <comment_id>

- **`GET`**  comment-detail 

- **`PATCH`** update comment 

  - body

    - TextField
      

- **`DELETE`** delete comment
