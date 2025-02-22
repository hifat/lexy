# K8s

- See all resource
```bash
kubectl get all
```

- See pods
```bash
kubectl get pods
```

- Apply file
```bash
kubectl apply -f myfile.yaml
```

- See all services
```bash
kubectl get services
```

- See logs in pod
```bash
kubectl logs mypod
```

- Delete pod
```bash
kubectl delete pod mypod
```

- Delete service
```bash
kubectl delete service my service
```

- Delete pod or all services
```bash
kubectl delete pod/service --all

kubectl delete all --all
```

- Delete deployment
```bash
kubectl delete deployment dp-name
```