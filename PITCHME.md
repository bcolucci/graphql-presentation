
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
* @color[#e71e60](Scalars): Int, Float, String, Boolean _, ID_
* @color[#e71e60](Enumerations)
* @color[#e71e60](Lists)
* @color[#e71e60](Our own types)

---?code=assets/types.gql

---

## Server: tow things only to do

1. Defining the @color[#e71e60](schema)
2. Defining the @color[#e71e60](resolvers): Layer between the schema and data.

---?code=assets/schema.gql

---?code=assets/queries.gql

---?code=assets/queries.json

---?code=assets/mutations.gql

---?code=assets/mutations.json

---?code=assets/interfaces.gql

---

## Let's code!

Goal: Create a **GraphQL server** which serves data from a **MySQL database**. Then create a React app which shows a dropdown Component (GraphQL data consumer).
