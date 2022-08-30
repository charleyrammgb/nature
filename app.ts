import express from 'express';

const app = express();

app.get('/', (req)=>{
  req.name = 'bob';
});
app.listen(3001, ()=>{
    console.log('started');
})
let message: string = 'Hello, Charley!';
console.log(message);
