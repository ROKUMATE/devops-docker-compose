import express from 'express';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const app = express();

app.get('/', async (req, res) => {
    const users = await client.user.findMany();
    res.send({
        users,
    });
});
app.post('/', async (req, res) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    res.send({
        message: 'post endpoint',
    });
});

app.listen(3000);
