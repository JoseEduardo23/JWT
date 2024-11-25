import express from 'express';
import routerUser from '../src/routers/user_routes.js';  
import transportroute from '../src/routers/transport_routes.js';  

const app = express();

app.set('port', process.env.port || 3000)


// Middleware
app.use(express.json())

// Ruta principal
app.get('/', (req, res) => {
    res.send("OK");
});

// Usar las rutas con el prefijo /api
app.use('/api', routerUser);

app.use('/api', transportroute);

// Exportar la app para su uso en Vercel
export default app;