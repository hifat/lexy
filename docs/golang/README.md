# Tech School

## Go Migration

### Install

-  MacOS

```bash
brew install golang-migrate
```

### Create Migration

```bash
migrate create -ext sql -dir <dir_path> -seq <schema_name>
```

## SQLC

### install

-  MacOS

```bash
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

-  EX. Insert

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

### Change params name

```sql
-- Balance will params by 'amount' name
INSERT INTO accounts (
    balance,
) VALUES (
    sqlc.arg(amount)
) RETURNING *;
```

## Docker

### Execute command pql in docker container

You can get `<docker_name>` by `docker ps` and see the name column

```bash
docker exec -it <docker_name> /bin/sh
```

## PostgresSQL

### Create DB

`<username>` = postgres  
`<role_name>` = postgres

```bash
create db --username=<username> --owner=<role_name> <db_name>
```

### Drop DB

```bash
dropdb -U <role_name> <db_name>
```

### Create DB by docker cmd

```bash
docker exec -it <docker_name> createdb --username=<username> --owner=<role_name> <db_name>
```

-  Shell in <db_name>
   ```bash
   docker exec -it <docker_name> psql -U <role_name> <db_name>
   ```

## DB Unit Test

### Install testtify package

```bash
go get github.com/stretchr/testify
```

### Scenario

-  Check no error
   ```go
   require.NoError(t, err)
   ```
-  Check not empty
   ```go
   require.NotEmpty(t, account)
   ```
-  Check item
   ```go
   require.Equal(t, newAccount.ID, account.ID)
   ```
-  Check date
   ```go
   require.WithinDuration(t, newAccount.CreatedAt, account.CreatedAt, time.Second)
   ```
-  Check error
   ```go
   require.Error(t, err)
   ```
-  Check equal error
   ```go
   require.EqualError(t, err, sql.ErrNoRows.Error())
   ```
-  Check len
   ```go
   require.Len(t, accounts, 5)
   ```
### Run test
```bash
go test -v -cover ./...
```

# Go Mockgen

### Install

1. 
   ```bash
   go install github.com/golang/mock/mockgen@v1.6.0
   ```

2. Some time you maybe install in your project
   ```bash
   go install github.com/golang/mock/mockgen@v1.6.0
   ```

