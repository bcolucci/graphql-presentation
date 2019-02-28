
## GraphQL

---

## What is GraphQL?

GraphQL is an open-source data query and manipulation language for APIs, created by Facebook in 2015.

---

GraphQL is a **language specification**, not a lib/framework. There are some implementations, in different languages.

---

## GraphQL vs REST

@color[orange](We should not compare them, because the usage is different, even if there are some usage intersections.)

* @size[0.8em](REST is an architectural style for creating Web services)
* @size[0.8em](GraphQL is mostly used as a BFF to unify multiple datasources for multiple targeted devices.)

---

## Three operations only

* @color[orange](Query) -> Read
* @color[orange](Mutation) -> Create, Update and Delete
* [ _@color[orange](Subscription) -> Way to push data from server to client_ ]

---

## Types

* Operations are **root types** (Query, Mutation and Subscription)
* Scalars: Int, Float, String, Boolean [_, ID_]
* Enumerations
* Lists (e.g. _users:[User]_)
* Customs

---?code=assets/User.gql&lang=js

---

## The End :)
