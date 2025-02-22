# Influx DB

ถ้าใช้ 2.6.6 จะมี Dashboard ในตัวด้วยอาจจะไม่จำเป็นต้องใช้ Grafana

```bash
docker pull influxdb:1.8.10
```

```bash
influxdb:
   image: influxdb:1.8.10
   container_name: influxdb
   environment:
      - INFLUXDB_DB=k6
      - INFLUXDB_HTTP_MAX_BODY_SIZE=0
   ports:
      - 8086:8086
   volumes:
      - ./data/influxdb:/var/lib/influxdb
```
