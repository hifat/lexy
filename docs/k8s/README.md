# K8s

- See all resource
```sh
kubectl get all
```

- See pods
```sh
kubectl get pods
```

- Apply file
```sh
kubectl apply -f myfile.yaml
```

- See all services
```sh
kubectl get services
```

- See logs in pod
```sh
kubectl logs mypod
```

- Delete pod
```sh
kubectl delete pod mypod
```

- Delete service
```sh
kubectl delete service my service
```

- Delete pod or all services
```sh
kubectl delete pod/service --all

kubectl delete all --all
```
