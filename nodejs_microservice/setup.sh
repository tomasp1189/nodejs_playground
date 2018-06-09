#!/usr/bin/env sh
sed -i '' 's/ms-nodebootstrap-example/ms-nodejsmicroservice/g' docker-compose.yml 
sed -i '' 's/ms-nodebootstrap-example/ms-nodejsmicroservice/g' package.json 
sed -i '' 's/ms-nodebootstrap-example/ms-nodejsmicroservice/g' Makefile 
sed -i '' 's/ms-nodebootstrap-example-db/ms-nodejsmicroservice-db/g' database.env 
sed -i '' 's/ms-nodebootstrap-example-db/ms-nodejsmicroservice-db/g' docker-compose.yml 
sed -i '' 's/5501:5501/7507:5501/g' docker-compose.yml 
rm -rf node_modules
make build
