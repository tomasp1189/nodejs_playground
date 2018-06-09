default: start

project:=nb-demo
service:=ms-nodebootstrap-example
NODE_ENV?=dev

.PHONY: start
start: 
	docker-compose -p ${project} up -d

.PHONY: stop
stop: 
	docker-compose -p ${project} down

.PHONY: restart
restart: stop start

.PHONY: logs
logs: 
	docker-compose -p ${project} logs -f ${service}

.PHONY: ps
ps: 
	docker-compose -p ${project} ps

.PHONY: build
build:
	docker-compose -p ${project} build --no-cache

.PHONY: clean
clean: stop build start

.PHONY: install-dependencies
install-dependencies:
	docker-compose -p ${project} exec ${service} npm install

.PHONY: install-package
install-package:
	docker-compose -p ${project} exec ${service} npm install -S ${package}

.PHONY: install-dev-package
install-dev-package:
	docker-compose -p ${project} exec ${service} npm install -D ${package}

.PHONY: migration-create
migration-create:
	docker-compose -p ${project} exec ${service} node_modules/db-migrate/bin/db-migrate create --sql-file

.PHONY: migrate
migrate:
	docker-compose -p ${project} exec ${service} node_modules/db-migrate/bin/db-migrate up -e ${NODE_ENV}

.PHONY: test
test:
	docker-compose -p ${project} exec ${service} npm run test

.PHONY: test-cov
test-cov:
	docker-compose -p ${project} exec ${service} npm run test-cov