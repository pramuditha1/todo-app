import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('todo list')
})

export default router;