import express, { Request, Response } from 'express';
import usuarioController from './controllers/usuarioController'
const app = express();
app.use(express.json())
const PORT = 3000;