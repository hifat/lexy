## Command

| Command      | Detail             |
|--------------|--------------------|
| adduser      |	add user          |
| passwd       |	change password   |

#### Delete user
```{shell}
userdel -r <username>
```

#### Change IP
```{shell}
sudo su

cd /etc/netplans
nano <your file>
```
- Fix fllow your own config

```{shell}
# Example

network:
   version: 2
   ethernets:
      enp0s3:
         addresses: [192.168.20.160/24]
         gateway4: 192.168.20.2
         nameservers:
            addresses: [192.168.20.2, 8.8.8.8]
```

```{shell}
netplan apply
```

