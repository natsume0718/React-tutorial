buildup:
	docker-compose up -d --build

up:
	docker-compose up -d

down: 
	docker-compose down

bash:
	docker-compose exec ${C} bash

sh:
	docker-compose exec ${C} sh

ash:
	docker-compose exec ${C} ash