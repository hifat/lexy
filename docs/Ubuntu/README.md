## Command

| Command      | Detail             |
|--------------|--------------------|
| adduser      |	add user          |
| passwd       |	change password   |

#### Delete user
```bash
userdel -r <username>
```

#### Change IP
```bash
sudo su

cd /etc/netplans
nano <your file>
```
- Fix fllow your own config

```bash
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

```bash
netplan apply
```

# Ubuntu File
- /etc/passwd = User account information.
- /etc/shadow = Secure account information.
- /etc/group = Group account information.
- /etc/gshadow = Secure group account information.
- /etc/login.defs = Shadow password suite configuration.
- /bin = OS command
- /var = Application file
- /etc = Configuration file
- /mnt = Mount point

```bash
usermod -d /home/<username> <username>
usermod -s /bin/bash <username>
usermod -g <groupname> <username>
usermod -l <oldusername> <newusername>
```
### User permission
#### Mode
r = read, w = write, x = execute  

#### สิ่งที่บ่งบอกว่าสิ่งนั้นเป็นอ่ะไร
d = directory, - = file, l = symlink  

#### Example
- -|---|---|---
- drwx-rx-x
- -rwx-rx-x
- user group other

#### Change permission
4 = read, 2 = write, 1 = execute
```bash
chmod 777 <filename>    # <filename> can read write and execute
```
