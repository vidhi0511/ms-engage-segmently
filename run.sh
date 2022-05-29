#!/bin/bash


# Remove Previous Docker Containers
docker-compose down
docker stop $(docker ps -q)
echo "y" | docker system prune
echo "y" | docker network prune
docker rm -f $(docker ps -a -q)

# Create new docker container
docker-compose build
docker-compose up -d
