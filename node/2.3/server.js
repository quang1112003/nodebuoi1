var express = require('express'),
    app = express();
    articles = require('./controller/articles');
//

var post = [];

var notImplimented = function(req,res) {
    res.end(501)
}
app.get('/articles',articles.index);//show all blog posts
app.get('/articles/new',new);
app.get('articles/:articleId',notImplimented);//reading one
app.post('/articles',articles.create);//making a new one
app.put('/articles/:articleId',notImplimented);//updating one
app.del('/article/:articleId',notImplimented);//deleting one


//comments
app.post('/articles/:articleId/comments',notImplimented);
app.del('/articles/:articleId/comments/:commentId',notImplimented);

app.listen(8080);