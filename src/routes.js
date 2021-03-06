import Router from 'koa-router'
import search from './controllers/search'
import similar from './controllers/similar'
import upsert from './controllers/upsert'
import bulk from './controllers/bulk'
import del from './controllers/del'
import getIndex from './controllers/getIndex'
import createIndex from './controllers/createIndex'
import dropIndex from './controllers/dropIndex'
import swapAlias from './controllers/swapAlias'
import config from 'config'

let router = new Router({
    prefix: config.prefix
});

router.get('/search/:term', search);
router.get('/similar/:id', similar);
router.post('/upsert', upsert);
router.post('/upsert/bulk', bulk);
router.post('/delete/:id', del);
router.get('/index', getIndex);
router.post('/index', createIndex);
router.delete('/index', dropIndex);
router.post('/alias/swap', swapAlias);

export default router.routes();