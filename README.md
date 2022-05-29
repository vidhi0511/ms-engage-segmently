# Segmently -  Better way to understand your customer segments!

![Alt text](assets/logo/Segmently.jpg?raw=true "Segmently Logo")

## Microsoft Engage 2022 | Data Analysis

![Alt text](assets/Dashboard.png?raw=true "Dashboard")


## The Challenge 

Develop an application to demonstrate how the Automotive Industry could harness data to make informed decisions.
Demonstrate the use of data analytics in identifying:
- Customer segments
- Most popular car specification combination (engine type, fuel, mileage , etc.)
- Right time to launch a new car, etc.

## User Problem Understanding 👩‍💻

The user is an automotive OEM (Original Equipment Manufacturer). He wants to gain an understanding of the following pain points:
- Which new car to position in the market for the target audience and what should be the expected sales?
    - Should a car be positioned in a Mid SUV range and at what price?
- What updates to launch in the existing car models at a variant level or as a revamp? For example:
    - Tata Harrier would like to check whether adding a petrol variant will increase the sales
    - Hyundai Santro would like to check if they should revamp or upgrade features at variant


## Agile Development Methodology 🎯
- I have divided the program into three weekly sprints with one epic for each sprint
- For the first sprint, the epic is to create a working data science pipeline to meet the requirements of the user problem
- For the second sprint, the epic is to create a working dashboard which will give access to the OEMs to access the dashboard & make queries
- For the third sprint, the epic is to create a dockerized container with the database which can host end to end solution

## Solution Architecture

![Alt text](assets/architecture/Architecture.png?raw=true "Solution Architecture Diagram")

-  JupyterNotebook is used for doing the Data Analysis where we have leverage Clustering and Regression Algorithms
-  JupyterNotebook is connected with Django ORM Layer with Pickle files for getting the trained instances of Scaler, PCA (Principal Component Analysis) & K-Means
-  JupterNotebook is also connected using Django REST APIs to send the updated aggregated insights over APIs 
-  Django is used with MongoDB. The key reason to use Django is that it can work on 'pickle' files
-  MongoDB provides a very good database to put a lot of unstructured data coming from analytics pipeline
-  Angular application is used at the frontend for providing user with a solution framework 
-  Angular application also leverages REST APIs from Django
-  Docker & NGinx helps in better orchestration of the complete solution
-  Redis is added in the last sprint to handle the queue management in seprate thread for data analytics pipeline

## Getting Started

### Pre-requisities

- Docker (Tested on Docker version 20.10.14)
- Docker Compose (Tested on Docker Compose version v2.5.1)

### Installation steps

It will just take one step to run the project after cloning it :-)

```
./run.sh
```
Kindly note that all builds are done in the `Dockerfile` so the installation is easy, but the build process, specially for Angular application will take some time as it is two stage docker image based orchestration

### (Optional) Installation Steps for JupyterNotebook (jupyter-data-analysis): 

```
cd ./jupyter-data-analysis
pip install -r requirements
jupyter notebook
```

### (Optional) Installation Steps for Django (segmently_django): 
There are two instances which have to be executed for Django 

- Django Main
Pre-requisites: MongoDB should be running in local
```
cd ./segmently_django
pip install -r requirements
python manage.py runserver
```

- Django Huey (Consumer)
Pre-requisites: Redis should be running in local

```
cd ./segmently_django
python manage.py run_huey
```


### (Optional) Installation Steps for Angular (segmently_dashboard): 


Pre-reqisites: NodeJS

```
cd ./segmently_dashboard
npm start
```


## Key Features of the Solution:👾
- `K-Means Clustering` algorithm based on `Principal Component Analysis` (which reduces 130+ features/dimension to 3 key features/dimension)
- End to end integration with `Django REST APIs` which funnels insights from Jupyter to Angular dashboard
- Use of `MongoDB` to keep 
- Use of `Redis` to queue the job task for processing data science pipeline on new data configuration
- Use of `Pickle` files to transfer trained model functions from Jupyter to Django to `predict` on the data set training `fit` 
- Use of `Docker-Compose` to make the orchestraion simple



## FUTURE SCOPE:🤖


