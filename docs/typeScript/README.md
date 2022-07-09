# Type Script

## Compiling TypeScript
```bash
tsc <FILE_NAME> 

# options
-w    watch mode will compiling on save
```

## Explicit Types
```ts
let text: string
let age: number
let isLoggedIn: boolean
```

### Array
```ts
let bakeries: string[]

// If you want to use push function. You have to assign blank array []

let bakeries: string[] = []
```

### Union Types
```ts
let butterID: string|number
let mixed: (string|number|boolean)[]
```

### Object Type
```ts
let otaOne: object
let otaTwo: {
   name: string,
   age: number,
   turbanColour: string,
}
```

### Any Type
```ts
let text: any
let bakeries: any[]
```

## Better Workflow & tsconfig
### Folder Structure
```
- public
  # Staic file and ts compile target
- src
  # Ts file
```

### config
```bash
tsc --init

```

- change the "outDir" and "rootDir" as you want
- After you config you can use one cmd "tsc" to compile 
```bash

tsc

# or

tsc -w
```

- If you use "tsc -w". Watcher will listening outside src dir. You can add "include" to tsconfig for resolve this problem
```
# Keep it outside "compilerOptions"

"include": ["src"]
```

## Function Basics
```ts
let greet: Function

const add = (a: number, b: number): void => {
   console.log(a + b)
}

const minus = (a: number, b: number): number => {
   return a - b
}
```

- Can use "?". If that parameter is not required
```ts
const ask = (question: string, answer?: string): string => {
   answer = answer || "[don't have answer]"
   return `${question} ${answer}`
}
```

## Aliases TType
```ts
type stringOrNumber = string | number
type ota = {
   name: string,
   age: number,
   turbanColour: string,
}

const greet = (msg: stringOrNumber, ota: ota): void => {
   console.log(`${msg} ${ota.name}`)
   console.log(`Age: ${ota.age}`)
   console.log(`turbanColour: ${ota.turbanColour}`)
}
```

## Function Signature
```ts
let add = (num1: number, num2: number) => number

✔️
add(a: number, b: number): number => {}

❌
add(a: number, b: string): string => {}
```

```ts
let user = ({ name: string, age: number }) => void

✔️
add({ name: string, age: number }): void => {}

❌
add({ name: string, age: string }): string => {}
```

## The DOM & Type Casting
- If you do this. Object is possibly 'null'
```ts
❌
const anchor = document.querySelector('a')
console.log(anchor.href)
```

- You have to do this
```ts
✔️
const anchor = document.querySelector('a')!
console.log(anchor.href)
```

### Type cast
```ts
const form = document.getElementById("form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#toFrom") as HTMLInputElement
const detail = document.querySelector("#detail") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement


form.addEventListener("submit", function(e: Event) {
   e.preventDefault()

   console.log(
      type.value,
      toFrom.value,
      detail.value,
      amount.valueAsNumber
   )
})
```

## Classes
```ts
class Invoice {
   client: string
   details: string
   amount: number

   constructor(a: string, b: string, c: number) {
      this.client = a
      this.details = b
      this.amount = c
   }

   format() {
      return `${this.client} owes ${this.details} for ${this.amount}`
   }
}
```

### Call class
```ts
const invOne = new Invoice("butter", "work on the butter website", 250)
const invTwo = new Invoice("cheese", "work on the cheese website", 500)

console.log(invOne, invTwo)
```

### Aliases type Class
```ts
const invoices: Invoice[] = []

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)
```

## Public, Private & Readonly
You can use readonly, public or private pre object, var or function that you want
```ts
readonly client: string, 
public details: string, 
private amount: number
```

## Module
```ts
invoice.ts

export class Invoice {
   constructor(
      readonly client: string, 
      public details: string,
      private amount: number
   ) {}

   format() {
      return `${this.client} owes ${this.details} for ${this.amount}`
   }
}
```

```ts
app.ts

import { Invoice } from "./invoice.js"
// You can use all in Invoice
```

### Setup when compile
You have to remove or comment in tsconfig.json
```
"module": "commonjs"
```

In html file add type="modeul" to script tag
```
<script type="module" src="sandbox.js"></script>
```

## Interfaces
```ts
interface Person {
   name: string
   age: number
   speak(msg: string): void
   spend(msg: number): number
}
```
### Imprement
```ts
const me: Person = {
   name: "Butter",
   age: 23,
   speak(msg: string): void {
      console.log(msg)
   },
   spend(msg: number): number {
      return msg
   }
}
```

### Imprement with function
```ts
const greetPerson = (person: Person) => {
   console.log(`Name: ${person.name}`)
   console.log(`Age: ${person.age}`)
   person.speak('Hi bro!')
   person.spend(9999)
}

greetPerson({
   name: 'Butter',
   age: 23,
   speak(msg: string) {
      console.log(`You tell me that: ${msg}`)
   },
   spend(n: number) {
      console.log(`Numbers you like: ${n}`)
      return n
   },
})
```

## Interfaces with classes
(Split file is optional)
```ts
formatter.ts

export interface Formatter {
   format(): string
}
```

```ts
payment.ts

import { Formatter } from "../interfaces/formatter.js"

export class Payment implements Formatter {
   constructor(readonly client: string, public details: string, private amount: number) {}

   format() {
      return `${this.client} owed ${this.details} for ${this.amount}`
   }
}
```

If some class same has the same properties as Formatter interface. It works the same such as Invoice class is not implements Formatter interface but Invoice class has the same properties as Formatter interface. It can be used
```ts
import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/payment.js"
import { Formatter } from "./interfaces/formatter.js"

let docOne: Formatter
let docTwo: Formatter

docOne = new Invoice("butter", "work on the butter website", 250)
docTwo = new Payment("butter", "work on the butter website", 250)
```

### Implements array
```ts
const docs: Formatter[] = []
docs.push(docOne)
docs.push(docTwo)
```

## Generics
ยกตัวอย่างเช่นเรามี Function ที่เอาไว้ add ของใน array
```ts
function addItem(item: string, array: string): string[] {
   return [
      ...array,
      item,
   ]
}
```

จะเกิดอะไรขึ้นถ้าเราต้องการ addItem เหมือนกันแต่ต้องการเปลี่ยนจาก string เป็น int เราอาจจะต้องสร้าง Function ขึ้นมาใหม่เป็น addItemInt อะไรก็ว่าไป แต่จะดีกว่ามั้ยถ้าเราใช้ Generics เข้ามาช่วย <[GENERICS_NAME]>
```ts
function addItem<T>(item: T, array: T): T[] {
   return [
      ...array,
      item,
   ]
}
```

### Implement
Type ของ \<T\> จะเปลี่ยน Type ไปตามค่าของ parameter แรกที่เราส่งไป
```ts
addItem(1, [2, 3, 4])
addItem("a", ["b", "c", "d"])
```

### extends
ป้องกันไม่ให้ส่ง Type อื่นนอกจากที่เรากำหนด
```ts
function addItem<T extends string | number>(item: T, array: T): T[] {
   return [
      ...array,
      item,
   ]
}
```

- extends object
```ts
function addUID <T extends { name: string }>(obj: T): object {
   const uid = Math.floor(Math.random() * 1)
   return {
      uid,
      ...obj,
   }
}
```

### Implement with interface
```ts
interface Person<T> {
   uid: number,
   name: string,
   detail: T
}

const p: Person<string> = {
   uid: 321,
   name: "Butter",
   detail: "OK guy"
}
```

## Enums
enums will return index that you select
```ts
enum ResourceType { BOOK, AUTHOR, FLOM, DIRECTOR, PERSON}

const type = ResourceType.AUTHOR       // 1
const user: object = {
   id: 1,
   name: "Butter",
   resourceType: ResourceType.PERSON,  // 4
}
```

## Tuples
### Explicitly
```ts
let tup: [string, string, number] = ["butter", "cheese", 98]
```

### Implicitly
Readonly
```ts
const tup = ["butter", "cheese", 98] as const
```
