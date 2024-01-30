// const express = require("express")
// const {MongoClient} = require("mongodb")
import express from "express";
import {MongoClient} from "mongodb";

import * as dotenv from "dotenv";
dotenv.config()
const app = express()
// const PORT = 5000

app.use(express.json())

// const MONGO_URL="mongodb://127.0.0.1:27017"
async function createConnection() {
    const client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    console.log("Mongodb Connected")
    return client
}

const client = await createConnection()



app.get("/", (req, res) => {
    res.send("Hello")
})

// app.get("/products",(req,res)=>{
//     res.send(products)
// })

app.get("/products/:id",async (req, res) => {
    try{
    const { id } = req.params
    console.log(req.params)
    // const product = products.find((product) => product.id === id)
    const product = await client.db("B53-node").collection("products").findOne({id:id})
    product?res.send(product):res.status(404).send({message:"No product Found"})}
    catch(err){
        res.status(500).send({message:"Internal Server Error"})
    }
})

app.get("/products", async(req, res) => {
    const { category, rating } = req.query
    if(req.query.rating){
        req.query.rating = +req.query.rating
    }
    const product = await client.db("B53-node").collection("products").find(req.query).toArray()
    res.send(product)
})

app.post("/products",express.json(),async(req,res)=>{
    const newProduct = req.body
    const result = await client.db("B53-node").collection("products").insertMany(newProduct)
    res.send(result)
})


app.delete("/products/:id",async (req,res)=>{
    const {id} = req.params
    const deleteproduct = await client.db("B53-node").collection("products").deleteOne({id:id})
    res.send(deleteproduct)
})

app.listen(process.env.PORT, () => console.log("Server Statred", process.env.PORT))