# Javascript NodeJs HapiJs MongoDb Boilerplate

## Info

1. Langauge :- Javascript
2. Envirnoment :- Node Js
3. Framework :- Hapi Js ( https://hapi.dev/api/?v=18.4.1 )
4. Manual API Testing :- Hapi Swagger ( https://www.npmjs.com/package/hapi-swagger )
5. Email Integgration: Nodemailer ( https://www.npmjs.com/package/nodemailer )

## Envirnoment Setup

1. Install eslint package in your IDE or Text Editor
2. Install edirtorconfig package in your IDE or Text Editor
3. add .env file in your project after clonning the project and follow the instruction provided in env.example.txt

## Folder Structure and Explaination

.
├── server
|   ├── authStrategy
|   |   ├── auth.js
|   |   └── developerauth.js
|   |
|   ├── config
|   |   ├── index.js
|   |   └── server.js
|   |
|   ├── models
|   |   ├── administrator
|   |   |   └── user.js
|   |   | 
|   |   ├── authetication
|   |   |   └── session.js
|   |   |   
|   |   └── index.js
|   |
|   ├── routes
|   |   ├── api
|   |   |   ├── administrator
|   |   |   |   └── user.js
|   |   |   |
|   |   |   └── authetication
|   |   |       └── auth.js
|   |   |   
|   |   └── index.js
|   |
|   ├── utils
|   |   └──
|   |
|   └── index.js
|
├── .editorconfig
├── .gitignore
├── env.example.txt
├── LICENCE
├── pakage-lock.json
├── package.json
└── README
