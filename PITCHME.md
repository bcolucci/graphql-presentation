
## GraphQL

@size[0.5em](... and an integration example with React)

---

## What is GraphQL?

GraphQL is an open-source data query and manipulation language for APIs, created by Facebook in 2015.

---

GraphQL is a **language specification**, not a lib/framework. There are some implementations, in different languages.

---

## GraphQL vs REST

@color[#e71e60](We should not compare them, because the usage is different, even if there are some usage intersections.)

* @size[0.8em](REST is an architectural style for creating Web services)
* @size[0.8em](GraphQL is mostly used as a BFF to unify multiple datasources for multiple targeted devices.)

---

## Three operations only

* @color[#e71e60](Query) -> Read
* @color[#e71e60](Mutation) -> Create, Update and Delete
* _@color[#e71e60](Subscription) -> Notify client_

---

## Types

* @color[#e71e60](Operations) are **root types** (Query, Mutation and Subscription)
* @color[#e71e60](Scalars): Int, Float, String, Boolean and ID
* @color[#e71e60](Enumerations)
* @color[#e71e60](Lists)
* **@color[#e71e60](Our own types)**

---?code=assets/gql/types.gql

---

## Server: tow things only to do

1. Defining the @color[#e71e60](schema)
2. Defining the @color[#e71e60](resolvers): Layer between the schema and data.

---?code=assets/gql/schema1.gql&title=Schema example

---?code=assets/gql/queries.gql&title=Query example

---?code=assets/json/queries.json&title=Query response

---?code=assets/gql/mutations.gql&title=Mutation example

---?code=assets/json/mutations.json&title=Mutation response

---?code=assets/gql/interfaces.gql&title=Interfaces

---

## Deep into an example

Create a **GraphQL server** which serves data from a **MySQL database** and a **in-memory map**.

Then create a **React app** which shows a dropdown and a button to trigger a mutation.

---?code=assets/pullandrunsql.sh&title=Get some SQL data

---

## Schema

![](assets/images/employees-schema.png)

---?code=assets/textes/project1.txt&title=Init the project

---?code=assets/textes/project2.txt&title=Install next.js and React

---?code=assets/json/package1.json

---?code=assets/js/index1.js&title=The index page

---?code=assets/textes/project3.txt&title=Let's run it

---

## UI (1)

![](assets/images/screen1.png)

---?code=assets/gql/schema2.gql&title=Schema (1)

---?code=assets/textes/project4.txt&title=Install Express and Apollo

---?code=assets/js/server1.js&title=Basic server

---

## Server (1)

![](assets/images/screen2.png)

---?code=assets/textes/project5.txt

---?code=assets/json/package2.json

---?code=assets/textes/project6.txt

---?code=assets/js/mysqlConnection.js&title=Mysql Connection

---?code=assets/js/resolvers1.js

---?code=assets/js/server2.js

---

## Query (1)

![](assets/images/screen3.png)

---?code=assets/gql/schema3.gql&title=full_name definition

---?code=assets/js/resolvers2.js&title=full_name resolver

---

## Query (2)

![](assets/images/screen4.png)

---?code=assets/gql/schema4.gql&title=views definition

---?code=assets/js/resolvers3.js&title=views resolver

---

## Query (3)

![](assets/images/screen5.png)

---

## Mutation

![](assets/images/screen6.png)

---

## Query (4)

![](assets/images/screen7.png)

---?code=assets/js/resolvers4.js

---

## Query (5)

![](assets/images/screen8.png)

---?code=assets/js/client.js

---?code=assets/js/index2.js

---

## Code time

---?code=assets/js/withApollo.js

---?code=assets/js/my_app.js

---?code=assets/js/EmployeesDropdown_alt.js
