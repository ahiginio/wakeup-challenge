
# Wakeup Challenge

Suppose we are a fast-growing restaurant management platform, as a developer, you are required to design a
solution to our product listing system in order to display all the products available to our waiters, and let them
create an order with many products. Let’s imagine we have many restaurants as clients and each has multiple
products ready to sell.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```
Install dependencies

```bash
  yarn
  cd app
  yarn
```

Run script at the root of the project to seed de mongoDB.

```bash
  npx ts-node src/lib/seed 
```

Start the server

```bash
  yarn start:dev
```

Start the client

```bash
  cd app
  yarn dev
```

## Running Tests

To run tests, run the following command on the root of the project.

```bash
  yarn run test
```

## Tech Stack

**Client:** React, TailwindCSS, Typescript

**Server:** Node, Express, MongoDb, Typescript


## Authors

- [@agustinhiginio](https://www.github.com/ahiginio)

