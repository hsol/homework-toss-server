.PHONY: start start-server start-client

start-server:
	python3 manage.py runserver 8080
start-client:
	npm start