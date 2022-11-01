
var articles = [];

module.exports.create = function(req,res) {
    req.body.comments = [];
    articles.push(req.body);
    res.redirect('/articles');
};

module.exports.index = function(req,res) {
    res.json(articles);
}
//rendering an html form to let user create posts
module.exports.new = function(req,res) {
    res.send("<form method='post' action='/articles'>\
    <input type='text' placeholder='title' name='title'/>\
    <input type='text' placeholder='author' name='author'/>\
    <textarea name='body'><textarea>\
    <button type='submit'>post!</button>\
    </form>");
}