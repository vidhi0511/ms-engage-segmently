FROM python:3.7

ENV VCAP_APPLICATION="True"
ENV BACKUP="True"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/

RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install -y \
        gcc \
        gettext \
        postgresql-client libpq-dev \
        sqlite3 \
    --no-install-recommends --allow-unauthenticated && rm -rf /var/lib/apt/lists/*

COPY . /usr/src/app

EXPOSE 8000
