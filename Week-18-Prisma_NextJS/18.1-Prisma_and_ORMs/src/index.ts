import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;

    const user = await client.todos.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            title: true,
            description: true,
            completed: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    res.json({
        user
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})