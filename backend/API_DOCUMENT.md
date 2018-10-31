# API Document

> 개발자를 위한 글과 사람 API 문서 작성중



## Authorization

In: header

```json
{
    "Authorization": "Token ecca6ccc274ff08c9adf9163b53487279bef8d38"
 }   
```



## User

#### /user/register/

- **`POST`** create user
  - username: CharField
    -  max_length: 150
  - email: EmailField
  - password: CharField
    - max_length: 128
  - nickname: CharField 
    - max_length: 30

#### /user/api-token-auth/

* **`POST`** login
  * username
  * password

#### /user/post/

**=> Auth required**

* **`GET`** post-list created by user



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

#### /category/<category_id>/
- **`GET`** category-detail

  ```json
  {
      "name": "카테고리 이름"
  }
  ```

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

        **=> Auth required**

        -  title: CharField 
             - max_lenght: 200,
        -  body: TextField
        -  category: <category_id>

#### /post/ <post_id>/
- **`GET`**  post-detail 

- **`PATCH`** update post 

  **=> Auth required**

  - title: CharField
    - max_lenght: 200,
  - body: TextField

  - category: <category_id>

- **`DELETE`** delete post

  **=> Auth required**

#### /comment/ 

- **`GET`**  comment-list

  * params
    * `post=<post_id>`

- **`POST`**  create comment

  **=> Auth required**

  * required data
    * post: <post_id>
    * body: TextField

#### /comment/ <comment_id>

- **`PATCH`** update comment 

  **=> Auth required**

  - post: <post_id>
  - body: TextField

- **`DELETE`** delete comment

  **=> Auth required**
