# Backend
 ### Team
	- 김은향
	- 송경린
	- 공현정

## Setup Development Environment
```bash
# 가상환경
# python version 3.6.0
pyenv install 3.6.0
pyenv virtualenv 3.6.0 <virtualenv_name>
cd <BACKEND_PATH>
pyenv local <virtualenv_name>

# 패키지 설치
pip install -r dev-requirements.txt

# settings 설정 
cd $HOME/dev/text-and-people/backend
echo 'DJANGO_SETTINGS_MODULE=text_and_people.settings.dev' >> .env
```
* secrets.json 파일 backend root에 넣어두기

### Git push 하기 전에!
```bash
cd <BACKEND_PATH> 
# pep8 검사
flake8 .

# 항상 git pull 하기
git pull origin develop
```