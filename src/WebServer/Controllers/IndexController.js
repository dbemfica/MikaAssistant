class IndexController {
    index(req, res) {
        res.render('dashboard');
    }
}
module.exports = new IndexController();