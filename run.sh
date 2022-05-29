#!/bin/bash


# Remove Previous Docker Containers
sudo docker-compose down
sudo docker stop $(sudo docker ps -q)
echo "y" | sudo docker system prune
echo "y" | sudo docker network prune
sudo docker rm -f $(sudo docker ps -a -q)

# Create new docker container
sudo docker-compose build
sudo docker-compose up -d
