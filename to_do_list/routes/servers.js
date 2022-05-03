import { Router } from 'express'
import { getAll, addTodo, checkTodo } from '../controllers/servers.js'
const router = Router();

router.get('/api/server', getAll);

router.get('/', async (req, res) => {
    const todos = await getAll();
    res.render('index', {
        title: 'Main Title',
        isIndex: true,
        todos,
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create',
        isCreate: true,
    });
});

router.post('/create', async (req, res) => {
    await addTodo(req.body);
    res.redirect('/');
});

router.post('/complete', async (req, res) => {
    await checkTodo(req.body);
    res.redirect('/');
});

export default router;
