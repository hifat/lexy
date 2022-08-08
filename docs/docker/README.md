# Basic

## Build the flask API server into Docker image
```docker
FROM python:3                          # เอา image ไหน
COPY . /app                            # copy ข้อมูลทั้งหมดจาก dir ปัจจุบันไปไว้ข้างใน app
WORKDIR /app                           # cd เข้าไปใน dir app
RUN pip install -r requirements.txt    # install python package
ENTRYPOINT ["python"]                  # ENTRYPOINT + CMD จะได้ python app.py
CMD ["app.py"]                         # จะใช้ท่านี้ก็ได้ ENTRYPOINT ["python", "app.py"]
```

## Build
```docker
docker build -t docker-demo .    # docker build -t <NAME> <DIR>
```

## List docker image
- List all images
```docker
docker images
```

- List some image
```docker
# Linux
docker images | grep docker-demo             #grep <IMAGE_NAME>

# Windows
docker images | Select-String docker-demo    #Select-String <IMAGE_NAME>
```

## Run docker
|options |detail                             |
|--------|-----------------------------------|
|-d      | run background                    |
|-p port \<PORT_OUTSIDE\>:<PORT_IN_CONTAINER>|
|--name  | Assign a name to the container    |

```docker
docker run --name <ASSIGN_NAME> -d -p 5000:5000 <IMAGE_NAME>

# Example
docker run --name docker-demo -d -p 5000:5000 docker-demo
```

## List docker run
```docker
docker ps

# Show all
docker ps -a
```

List some docker run 
```docker
# Linux
docker ps | grep docker-demo              #grep <IMAGE_NAME>

# Windows
docker ps | Select-String docker-demo     #Select-String <IMAGE_NAME>
```


## Docker login
```docker
docker login -u <YOUR_USERNAME>
```

## Push to docker hub
Prepare tag (default version is latest)
```docker
docker tag <IMAGE_NAME> <DOCKER_HUB_USERNAME>/<IMAGE_NAME>

# Prepare tag and use version
docker tag <IMAGE_NAME> <DOCKER_HUB_USERNAME>/<IMAGE_NAME>:<VERSION>
```

Push to hub (default is docker hub)
```docker
docker push <DOCKER_HUB_USERNAME>/<IMAGE_NAME>

# If you want push to other hub
docker push <HOST_NAME>/<DOCKER_HUB_USERNAME>/<IMAGE_NAME>
```

## Stop docker running
```docker
docker kill <IMAGE_NAME>
```

Remove all running proccess (docker ps)
```docker
docker rm <IMAGE_NAME>

# Multiple remove
docker rm <IMAGE_NAME_1> <IMAGE_NAME_2> <IMAGE_NAME_3>
```

Remove image
```docker
docker rmi <IMAGE_ID>

# Multiple remove
docker rm <IMAGE_NAME_1> <IMAGE_NAME_2> <IMAGE_NAME_3>
```

Remove all image and cache (But will not remove image running)
```docker
docker system prune -a
```

## Pull from registry
```docker
docker pull <USERNAME>/<IMAGE_NAME>
```

Run and pull (Docker will auto find image on hub if not found in local)
```docker
docker run --name docker-demo -d -p 5000:5000 <USERNAME>/<IMAGE_NAME>
```

## Logs
```docker
docker logs <IMAGE_NAME>
```