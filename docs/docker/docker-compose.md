# Docker Compose

docker-compose.yml
```yml
version: '3.8'

services:
  spring:
    image: sikiryl/spring-app
    ports:
      - 8081:8088
    depends_on:
      - kubeops-mysql

  kubeops-mysql:
    image: mysql:latest
    environment:
      - MYSQL_ROOT_PASSWORD=kubeops_root
      - MYSQL_USER=kubeops_user
      - MYSQL_PASSWORD=kubeops_password
      - MYSQL_DATABASE=kubeops
    volumes:
      - ./tmp/mysql/data:/var/lib/mysql
    ports:
      - 3307:3306
```

## Version
แต่ละ version อาจจะมี syntax ที่แตกต่างกัน [อ่านเพิ่มเติม](https://docs.docker.com/compose/compose-file/compose-file-v3/)

## Run some services
```docker
docker-compose up <SERVICE_NAME>

# Run background
docker-compose up -d <SERVICE_NAME>
```

## Kill some process
```docker
docker-compose down <SERVICE_NAME>

# Run background
docker-compose down -d <SERVICE_NAME>
```

## Run all services
docker-compose จะ run services ทั้งหมดที่อยู่ใน docker-compsoe.yml
```docker
docker-compose up

# Run background
docker-compose up -d
```

## Stop all services
```docker
docker-compose stop
```

## Remove and stop all image in compose
```docker
docker-compose down
```

## Assign name(Not recomend)
You have to add property "container_name" ไม่แนะนำเพราะปล่อยมันตั้งชื่อแบบ auto ดีกว่าเพราะจะได้ make sure ว่าชื่อจะเป็นซ้ำแน่นอน จะได้รับ trafic ใด้หลายช่องทางพร้อมที่จะทำให้มัน HA ตลอดเวลา
```docker
container_name: <ASIGN_NAME>
```