# NestJS

GET --> controller --> service

### Create module

```bashell
nest g module todos
```

### Create controller

```bashell
nest g controller todos
```

### Create service

```bashell
nest g service todos
```

### Create resource

```bashell
nest g resource todos
```

## Basic method

```ts
// *.controller.ts

// GET /todos?status=true
@Get()
getTodos(@Query('status') status: string) {
    return []
}

// GET /todos/:id
@Get(':id')
GetTodoByID(@Param('id' id: string)) {
    return { id }
}

// POST /todos
@Post()
createTodo(@Body() createTodoDto: CreateTodoDto) {
    return { createTodoDto }
}

// GET /todos
@Put(':id')
updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return { updateTodoDto }
}

// GET /todos
@Delete(':id')
deleteTodo(@Param('id') id: string) {
    return { id }
}
```

## Provider

```ts
// *.service.ts


```

## Exception Handling

[Exception Handling](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)

## Guard

```
nest g guard <name>
```

[Guard](https://docs.nestjs.com/guards)