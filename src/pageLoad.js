var page = require('webpage').create();
 
page.open('https://net.tutsplus.com', function () {
    var title = page.evaluate(function () {
        var posts = document.getElementsByClassName("page-content");
        posts[0].style.backgroundColor = "#000000";
        return document.title;
    });
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
    page.render(title + ".png");
    phantom.exit();
});