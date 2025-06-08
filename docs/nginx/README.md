# NGINX

## Install

```sh
sudo apt install nginx
```

### Check Status

```sh
systemctl status nginx
```

## Reverse Proxy

```sh
sudo vi etc/nginx/sites-available/<your_domain_name>
```

Or copy from default


```sh
cd /etc/nginx/sites-available/
sudo cp default <your_domain_name>
vi <your_domain_name>
```