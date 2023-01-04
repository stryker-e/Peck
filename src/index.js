import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! Love, Peck.');
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000'),
);
console.log('Hello Peck.');
// console.log(process.env.TOKEN)