<h1 align="center" style="font-weight: bold;">Pure Backend with Typescript 💻</h1>

<h2 id="layout">🎨 Layout</h2>

<div align="center">

**File Structure**
<img src="./images/file scrtucture.JPG" alt="Random Image" width="200px">

</div>

<div align="center">

**package.json**
<img src="./images/package.JPG" alt="Random Image" width="700px">

</div>

<div align="center">

**tsconfig.json**
<img src="./images/tsconfig.JPG" alt="Random Image" width="900px">

</div>

<div align="center">

**nodemon.json**
<img src="./images/nodemon.JPG" alt="Random Image" width="900px">

</div>

<h2 id="technologies">💻 Technologies</h2>

- Nodejs
- Express
- Mongoose

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- [Git](https://github.com)

<h3>Starting</h3>

How to start your project

```bash
npm init -y

```

Initial Dependencies

```bash
npm install -D typescript
npm i -D ts-node
tsc --init
npm i -D nodemon
```

**./tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "NodeNext",
    "moduleResolution": "Node",
    "baseUrl": "src",
    "sourceMap": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

**./package.json**

```json
{
  //
  //codes
  //
  "scripts": {
    "start": "nodemon"
  }
  //
  //codes
  //
}
```

**./nodemon.json**

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "exec": "ts-node ./src/index.ts"
}
```

Dependencies

```bash
npm i express
npm i @types/express

npm i cors
npm i @types/cors

npm i mongoose
npm i @types/mongoose
```
