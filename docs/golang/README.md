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
        package: "db"     // package name
        out: "./db/sqlc"         // path for storing from sqlc genrate file
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