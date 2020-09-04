'use strict';
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    return res.send('Success send');
});

module.exports = router;