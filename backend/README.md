# Backend
 ### Team
	- 김은향
	- 송경린
	- 공현정

## Setup Development Environment
```bash
# 가상환경
# python version 3.6.0
# 3.6.0 설치 안돼있으면 설치
pyenv instal 3.6.0

# python 3.6.0 버전으로 pipenv 설치 
pyenv local 3.6.0 
pip install pipenv

# 패키지 설치 + 가상환경 생성
cd <BACKEND_PATH>
pipenv install 

# 가상환경 활성화
pipenv shell

# settings 설정 
cd $HOME/dev/text-and-people/backend
echo 'DJANGO_SETTINGS_MODULE=text_and_people.settings.dev' >> .env
```
* secrets.json 파일 backend root에 넣어두기

## Run Server
```bash
cd <BACKEND_PATH>
# migrate
./manage.py migrate
# run server
./manage.py runserver
```

### Git push 하기 전에!
```bash
cd <BACKEND_PATH> 
# pep8 검사
flake8 .

# 항상 git pull 하기
git pull origin develop
```