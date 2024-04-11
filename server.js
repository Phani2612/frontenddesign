const Express = require('express')


const App = Express()

App.use('/styles' , Express.static('styles'))

App.set('Views', './Views');

App.set('view engine' , "ejs")


App.get('/' , function(req,res)
{
    res.render('index.ejs')
})



App.listen(5000 , function()
{
     console.log("Port is running at 5000")
})
