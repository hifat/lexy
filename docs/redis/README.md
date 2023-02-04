# Redis

```docker
version: '3.9'

services:
  redis:
    image: redis
    container_name: redis
    ports:
      - 6379:6379
```


## Basic command

Set

```bash
set foo butter
```

Get

```bash
get foo
```

Set and set expire

```bash
set foo butter ex <second>
```

Delete

```bash
del foo
```

## Config

- If your redis server down data in memory will removed all. You can config
[Default Config](https://raw.githubusercontent.com/redis/redis/7.0/redis.conf)
- If you use docker

Check current dir in container

```bash
docker container exec -it redis bash
```

```bash
pwd
```

Add in docker-compose
```docker
   volumes:
      - ./data/redis:/data
      - ./configs/redis.conf:/redis.conf
   command: redis-server /redis.conf
```

   - Add `redis.conf` in `/configs` and copy `Default Config` to `redis.conf`
   - Make dir `/data/redis`  

If you use redis 6
   - Find `bind` in `redis.conf` change value to `0.0.0.0`

If you use redis 7
   - Find `bind` in `redis.conf` change value to `* -::*`

Note: Redis 7 has a number of security improvements and it's highly recommended to use them. One of them is to use redis auth, which you can configure by adding the following line to your redis.conf file:
```bash
requirepass <password>
```

And then set the password from redis-cli with the command
```bash
127.0.0.1:6379> auth <password>
```

After you close redis server you will see `/data/reids/*.rdb`

## Snapshotting

Find `save <seconds> <changes> [<seconds> <changes> ...]` in `redis.conf`  
Unless specified otherwise, by default Redis will save the DB:
  * After 3600 seconds (an hour) if at least 1 change was performed
  * After 300 seconds (5 minutes) if at least 100 changes were performed
  * After 60 seconds if at least 10000 changes were performed

### Redis 6
```
save 3600 1 
save 300 5 
save 60 10000
```

### Redis 7
```
save 3600 1 300 5 60 10000
```

### Disable snap short
```
save ""
```

## APPEND ONLY MODE

By default Redis asynchronously dumps the dataset on disk. This mode is
good enough in many applications, but an issue with the Redis process or
a power outage may result into a few minutes of writes lost (depending on
the configured save points).

- Fix config

```
save ""
...
appendonly no
```

## Monitoring

Learin in:
   - influxdb
   - grafana

```docker
docker compose up influxdb grafana
```


[Learing Command](https://redis.io/commands/)