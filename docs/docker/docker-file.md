# Basic Syntax

### FROM
Use base image that you want. If you don't use version tag default is :latest but not recommend because effect your app. Should use version tag
```bash
FROM python:3.9.6
```

### WORKDIR
Create directory in container image and open that directory
```bash
WORKDIR app
```

### COPY
Copy file from your dir to dir in container  
COPY [your_dir] [container_dir]  
Explain: Copy all file in your dir to /app in container. If your WORKDIR is /app/foo. It is will copy to /app/foo
```bash
COPY . .

# If you want copy to different dir
COPY . ./app/foo/bar
```

### EXPOSE
Container port
```bash
EXPOSE 3000
```

### ENTRYPOINT
It is default executable. When container instance start, It run ENTRYPOINT  
** Some image build in default executable. It is not necessary to specify an ENTRYPOINT
```bash
ENTRYPOINT ["python", "app.py"]     # python app.py
```

### CMD
If ENTRYPOINT is set, CMD become argument for ENTRYPOINT
```bash
CMD ["--host=0.0.0.0"]              # python app.py --host=0.0.0.0
```

## File

### .dockerignore
If your do not want some file when use COPY you can add file name in `.dockerignore`
```bash
node_modules
```