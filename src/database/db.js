/*import mongoose from "mongoose";
  // Connect to MongoDB
try {
  await mongoose.connect('mongodb+srv://NicoleGalindez:nicole2501@cluster0.rw5wf5u.mongodb.net/Backend_ConfiApp', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  });
  console.log("Conectado exitosamente a la base de datos");
} catch (error) {
  console.error("Error connecting to MongoDB", error);}*/

import mongoose from 'mongoose'

/*
export const connectDB = async () =>{
try {
    await mongoose.connect('mongodb://127.0.0.1/ConfiaApp');
    console.log("DB is connected")
} catch (error) {
    console.log (error);
    }
};*/










/*
const uri = 'mongodb+srv://NicoleGalindez:nicole2501@cluster0.rw5wf5u.mongodb.net/Backend_ConfiApp';

 mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
   .then(() => {
     console.log('Conexión a la base de datos exitosa');
   })
   .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
   });*/

   const uri = 'mongodb+srv://NicoleGalindez:nicole2501@cluster0.rw5wf5u.mongodb.net/Backend_ConfiApp';

mongoose.connect(uri, {
  // Las opciones useNewUrlParser y useUnifiedTopology son obsoletas en versiones 4.0.0 y superiores
})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

