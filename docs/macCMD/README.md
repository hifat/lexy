# sh

- Check running process on port
```bash
   lsof -i :<port>
```

- Kill process
```bash
   kill <PID>

   # or

   pkill <app_name>
```

- Generate base64 string
```bash
   openssl rand -base64 <length_number>
```

- Remove .DS_Store
```bash
find . -name ".DS_Store" -delete
```

- Check IP
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

- Remove `node_modules`

```bash
# For checking
find ./web -name "node_modules" -type d -prune

# For delete
find ./web -name "node_modules" -type d -prune -exec rm -rf '{}' +
```
