import express from 'express'
import serverRouter from './routes/servers.js'
import exphbs from 'express-handlebars'
import path from 'path'

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.resolve(), 'public')));

app.use(serverRouter);

async function start() {
    try {
        app.listen(PORT, () => {
            console.log('Server has been started...')
        });
    } catch(err) {
        console.log(err)
    }
};

start();
