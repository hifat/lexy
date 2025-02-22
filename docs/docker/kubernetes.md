# Kubernetes

ถ้าเราจะทำการ scale ตัว container ไปหลาย ๆ host แล้วมีตัว manage state ต่าง ๆ เราไม่ต้องเสียเวลาไป secure shell เข้าไปที่ละเครื่องแล้ว manage state

## Docker stack
Docker stack จะทำให้คนที่ไม่ได้รู้ K8s มากสามารถใช้งาน K8s ได้ผ่าน syntax ที่เราคุ้นเคยอย่าง docker-compose

## Start to use
```bash
docker swarm init
```

## Deploy
```bash
docker stack deploy kubeops-stack -c docker-compose.yml
```

## list stack some service
```bash
docker stack ps kubeops-stack
```

## Show forward services
```bash
kubectl get services
```

## Show container running that is not service level
```bash
kubectl get pods
```

## Verifying and cleanup Docker Stack
```bash
export IP=${kubectl get services -l com.docker.service.id=kubeops-stack-spring -o jsonpath='{.item[*].status.loadBalance.ingress[0].ip}'}

curl http://$IP:8081
```

## Remove stack
```bash
docker stack rm kubeops-stack
```


## Kube delete service
```bash
kubectl delete servics -l "com.docker.service.id in (kubeops-stack-kubeops-mysql,kubeops-stack-spring,com)"
```
=================================

# Trip

## See modules in image PHP
```bash
docker run php:8.0.3-fpm-buster php -m    # php -m : This is command for php only
```