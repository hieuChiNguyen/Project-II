import express from 'express';
import homeController from '../controllers/homeController.js';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/products', (req, res) => {
        res.send('New Products');
    })

    return app.use('/', router);
}

export default initWebRoute;

// res.sendFile(Path.join(__dirname, '/index.html'));