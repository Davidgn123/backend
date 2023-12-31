/**
* Generated by MongoDB Relational Migrator 
* https://www.mongodb.com/products/relational-migrator 
* Collection: puntosDeReferencia
* Language: JavaScript
* Template: Mongoose
* Generated on 1/11/23

*/
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const puntosDeReferencia_Mongoose = new Schema({
    "_id": mongoose.ObjectId,
    "idpuntosReferencia": Number,
    "nombrePunto": String,
    "direccionPunto": String,
    "georeferencia": String,
}, { collection: "puntosDeReferencia" })

export const puntosDeReferencia_MongooseModel = model("puntosDeReferencia_Mongoose", puntosDeReferencia_Mongoose);