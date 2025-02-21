# Shell

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
```shell
find . -name ".DS_Store" -delete
```

- Check IP
```shell
ifconfig | grep "inet " | grep -v 127.0.0.1
```