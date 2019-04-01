var read = require('node-readability');
read('https://jhcccc.github.io/content.html', function(err, article, meta) {
    console.log(article.h1);
    // Output: undefined
    console.log(article.content);
    // Output: false
    article.close();
});