# Todo App on Next+Nest+GraphQL+Prisma

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## How to run

Front end:
`$ yarn start todo-fe`

Back end:
`$ yarn start todo-api`

## How to set up this workspace with Nextjs app and NestJs app from scratch:

1. Create a empty workspace:
   `$ npx create-nx-workspace YOUR_WORKSPACE_NAME`

2. Create a Next app:
   `$ cd YOUR_WORKSPACE_NAME/apps`
   `$ npx create-next-app --ts` If it is typescript

3. Install Appollo client and graphQL for the front end app(eg. todo-fe)
   `$ npm install @apollo/client graphql`

4. Create a Nest app:
   `$ cd YOUR_WORKSPACE_NAME/apps`
   `$ npm i -g @nestjs/cli`
   `$ nest new YOUR_PROJECT_NAME` eg. todo-api

5. Install graphQL in Nest:
   `$ npm i @nestjs/graphql graphql-tools graphql apollo-server-express`
   You can build resouce in Nest:
   `$ nest g resource RESOURCE_NAME` eg. todo

6. Install Prisma ORM in Nest:
   Go back to the project roo, put

   "prisma": {
   "schema": "apps/todo-api/prisma/schema.prisma"
   }

   in the package.json
   `$ npm install prisma --save-dev`
   `$ npx prisma`
   `$ npx prisma init`
   Reference: https://docs.nestjs.com/recipes/prisma

   Install Prisma client:
   `$ npm install @prisma/client`
   After you update the model, you need regenerate the client:
   `$ npx prisma generate`

### Have fund so far !!!
