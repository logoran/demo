const router = require('logoran-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'logoran title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
