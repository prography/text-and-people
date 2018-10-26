# Post and People for Developer
> 개발자들을 위한 글과 사람

#### 팀 이름: UP조
#### 팀 구성
- Backend
	- 김은향
	- 송경린
	- 공현정
- Frontend
	- 설훈
	- 김도영
	- 최인지

## Branches
Master > Develop > **

1. 항상 Develop을 거쳐 Master로 머지
	- git push origin feature/작업명
	- git hub에서 Pull Request로 코드리뷰 받기.
2. Develop을 Base로 하여 작업 Branch를 만들 것.
	- git checkout develop
	- git pull origin develop(충돌날 경우 해결하기)
	- git checkout -b feature/작업명
3. 작업 Branch는 자신이 해야할일과 연관된 이름으로 명명할 것.
	- feature/작업명 - ex) feature/posts

## Stacks
#### - Frontend
1. Vue3
2. Vue Router
3. Vuex
4. MaterilizeCSS
5. Babel(ES6)

## Commit Convention
- [b] - backend
- [f] - frontend

#### Sub Convention
- api
- ...
- style
- components
- containers
- config
- ...

> ex) frontend에서 Layout Components Style 작업 경우, [f-components] Layout Header style 변경
