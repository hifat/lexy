# Best Practices

1. Prefer minimal base images
   - Prefer Distroless images
2. Least privilege user
   - create a dedicated user and group on the image, with minimal permissions to run the application
3. User Copy instead of ADD
   - ADD could result in MITM attacks, sources of malicious data
4. Don't leak sensitive data to Docker images
   - Separate sensitive data out of application source cvode and keep them in Valut, hence, docker build phase won't contains any sensitive data
5. Don't Use the latest tags
   - Docker image owners should not use the lastest image tags, which may result in application breaking changes if the last image tags would not compatible with the application <br> 
   e.g. FROM kubeops:8-alpine -> \<version\>-\<operating system\>
6. Use labels for matadata
   Labels with matadata for images provide useful information for users