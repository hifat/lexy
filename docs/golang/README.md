# Tech School

## Go Migration

### Install

- MacOS
```sh
brew install golang-migrate
```

### Create Migration

```sh
migrate create -ext sql -dir <dir_path> -seq <schema_name>
```

## SQLC

### install

- MacOS
```sh
brew install sqlc
```

### Config
```sqlc
version: "2"
sql:
  - engine: "postgresql"        // DB Driver
    queries: "./db/query"       // path for storing query file
    schema: "./db/migration"    // ....
    gen:
      go:
        package: "db"           // package name
        out: "./db/sqlc"        // path for storing from sqlc genrate file
        emit_json_tags: true    // getnerate json tags `json:foo`
```

### Create Schema
```sql
-- name: <func_name> :<return[one|many]>
<query_sql_syntax>
```

- EX. Insert
```sql
-- name: CreateAccount :one
INSERT INTO accounts (
    owner,
    balance,
    currency
) VALUES (
    $1, $2, $3
) RETURNING *;
```

# Docker

### Execute command pql in docker container

You can get `<docker_name>` by `docker ps` and see the name column

```sh
docker exec -it <docker_name> /bin/sh
```

## PostgresSQL

### Create DB
`<username>` = postgres  
`<role_name>` = postgres
```sh
create db --username=<username> --owner=<role_name> <db_name>
```

### Drop DB

```sh
dropdb -U <role_name> <db_name>
```

### Create DB by docker cmd

```sh
docker exec -it <docker_name> createdb --username=<username> --owner=<role_name> <db_name>
```

- Shell in <db_name>
```sh
docker exec -it <docker_name> psql -U <role_name> <db_name>
```