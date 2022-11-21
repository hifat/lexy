# Other

## Instal Makefile on Windows
1. download [mingw-get](https://sourceforge.net/projects/mingw/)
2. install and unchecking user intaface
3. install mingw32-make package
   ```bash
   mingw-get install mingw32-make
   ```
4. in "C:\MinGW\bin" rename mingw32-make.exe to "make.exe"

## Laravel apache
[See this link](https://phpraxis.wordpress.com/2016/08/02/steps-for-configuring-laravel-on-apache-http-server/)

## Golang
- nodemon live reload
```bash
nodemon --exec go run main.go --signal SIGTERM
```