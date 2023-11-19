# Go Swagger

## Gin

[example](https://github.com/swaggo/gin-swagger/tree/master/example)

1. Add the following comment to you `routes` file

```go
// @title           ConQ API
// @version         1.0
// @description     This is a sample server celler server.
// @termsOfService  http://swagger.io/terms/

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @Security bearer
// @securityDefinitions.apikey bearer
// @in header
// @name Authorization

// @BasePath /v1
```

2. Swag init
```shell
swag init --generalInfo=./internal/app/routes/routeV1/v1.go --instanceName v1
```

3. import go swag

```go
_ "github.com/hifat/con-q-api/docs"    // You must do step 1 first.
swaggerFiles "github.com/swaggo/files"
ginSwagger "github.com/swaggo/gin-swagger"

```

4. Add swag route
```go
v1 := r.router.Group("v1")
v1.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
```
