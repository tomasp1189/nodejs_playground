# nodebootstrap-microservice

[![Code Climate Badge][codeclimate-img]][codeclimate-url]
[![NodeSecurity Status][nsp-img]][nsp-url]


A skeleton of a containerized microservice generated by [Node Bootstrap](http://nodebootstrap.io)

## Developing code in local workspace

**Please note:** we follow the philosophy of clean separation between "build"
and "run" stages. 

In the build stage, the `Dockerfile` is used to build the container image and
bring it to a state where it can be run by any execution environment (such as:
Swarm, Kubernetes, ECR, etc.) given that the environment will also contextualize 
it using appropriate environmental variables.

In the run stage execution environment runs the container image built by the
Dockerfile. For local development docker-compose.yml takes the role of the
executor. it is the simplest solution for the task and we prefer keeping things
simple, locally. 

Please note that in the local environment code hot-reloading is turned on, so
there is no need to restart the container as you develop code, just edit the
corresponding files and enjoy the experience!

## Run/Stop container:

```
# run:
> make [start]

# stop:
> make stop

# clean rebuild:
> make clean
```

Inspecting health of the containers:

```
> make ps
```

## Monitoring Logs:

```
> make logs
```

## Running tests:

```
> make test
```
Coverage reports are stored under `coverage` sub-folder.

## Installing a new package

Installing a package:

```
npm run install-package <packagename>
```

Install a package in dev-dependencies:

```
npm run install-dev-package <packagename>
```

## Database Migrations (Currently: MySQL)

```
# Create migration:
> npm run migration-create <migration-name>
# e.g.: 
> npm run migration-create create-users-table
# Run migrations:
> make migrate
```

## Accessing the microservice:

http://localhost:5501/

## Running Automated Tests

1. Make sure the microservice is up (if not: run `make clean` or `make start`)
2. Run: `make test`

## License

[MIT](LICENSE)

[codeclimate-img]: https://codeclimate.com/github/inadarei/nodebootstrap-microservice/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/inadarei/nodebootstrap-microservice
[nsp-img]: https://nodesecurity.io/orgs/inadarei-public/projects/d639c395-08dd-4297-aeb5-87fcfa08cd3c/badge
[nsp-url]: https://nodesecurity.io/orgs/inadarei-public/projects/d639c395-08dd-4297-aeb5-87fcfa08cd3c