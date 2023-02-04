# Grafana

```docker
docker pull grafana/grafana
```

```docker
grafana:
      image: grafana/grafana
      container_name: grafana
      environment:
        - GF_AUTH_ANONTMOUS_ENABLED=true
        - GF_AUTH_ANONTMOUS_ORG_ROLE=Admin
      ports:
        - 3000:3000
      volumes:
        - ./data/grafana:/var/lib/grafana
```

```docker
docker compose up influxdb grafana
```

username: `admin`  
password: `admin`

Setup grafana for k6 monitoring
1. go to `setting`
2. url `http://influxdb:8086`
3. Database `k6`
4. Click `save & test`
5. In grafana click menu `dashboard -> +import`
6. Go to [Grafana k6 Dashboard](https://grafana.com/grafana/dashboards/?pg=hp&plcmt=lt-box-dashboards&search=k6+Load+Testing+Result)
7. Choose `K6 Load Testing Result`
8. Click `Dashboard ID copied!`
9. Place your dashboard ID and click `load`
10. Setting by your own or use default
11. k6 input choose `influxdb`
12. Click `load`
13. Run your k6 and see result on grafana!

