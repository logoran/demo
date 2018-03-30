const router = require('logoran-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

module.exports = router;
