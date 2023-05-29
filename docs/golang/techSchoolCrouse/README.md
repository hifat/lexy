# Go Migration

### Install

- MacOS
```
brew install golang-migrate
```

### Create Migration

```
migrate create -ext sql -dir <dir_path> -seq <schema_name>
```

# SQLC

### install

- MacOS
```
brew install sqlc
```

- Config
```
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

- Create Schema
```
-- name: <func_name> :<return[one|many]>
<query_sql_syntax>
```

- EX. Insert
```
-- name: CreateAccount :one
INSERT INTO accounts (
    owner,
    balance,
    currency
) VALUES (
    $1, $2, $3
) RETURNING *;
```