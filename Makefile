include .env

# .PHONY: start
# start:
# 	docker-compose start -d

# para o container
.PHONY: stop
stop:
	docker-compose stop

#sobe os containers e starta a aplicação
.PHONY: up
up:
	docker-compose up -d

# remove os containers
  # Usando o down remove o container
.PHONY: delete
delete:
	docker-compose down

# log do container
.PHONY: logs
logs:
	docker-compose logs -f