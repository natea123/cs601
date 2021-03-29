var json = [
      {
          "caption": "Trump adopted by the Queen of Yorkshire",
          "source": "Fox News",
          "url": "http://www.foxnews.com",
          "author": "Joe Mann",
          "released": "2020-01-17 12:01:28 AM EST",
          "story": "This is a really interesting story.  More to follow.."
      },
      {
          "caption": "Chimps land on Saturn",
          "source": "BBC",
          "url": "http://www.bbc.com",
          "author": "Anita Lee",
          "released": "2021-03-29 12:01:28 AM EST",
          "story": "All chimpanzee space crew successfully lands ship on Saturn"
      },
      {
          "caption": "Dog for hire.  Solves crime and fluffy",
          "source": "The Voxx",
          "url": "https://www.washingtonpost.com/",
          "author": "Mary Blige",
          "released": "2019-11-17 8:21:01 PM EST",
          "story": "Makes make hope that a dog can become President.  Hell, Trump can do it..."
      }
    ];

json.forEach(function(obj) {

    var d = new Date(obj.released);
    var today = new Date();
    if (d.getDate() == today.getDate()) {
        document.getElementById("caption").innerHTML = obj.caption;
        document.getElementById("source").innerHTML = obj.source;
        document.getElementById("url").innerHTML = obj.url;
        document.getElementById("url").href = obj.url;
        document.getElementById("author").innerHTML = obj.author;
        document.getElementById("released").innerHTML = obj.released;
        document.getElementById("story").innerHTML = obj.story;
    }
});

function checkAuthor() {
 //TODO: write function to display articles from given author
    var searchAuthor = document.getElementById('author').value;
    console.log(searchAuthor)

    json.forEach(function(obj) {

        if (obj.author == searchAuthor) {
            console.log("found")
            document.getElementById("caption").innerHTML = obj.caption;
            document.getElementById("source").innerHTML = obj.source;
            document.getElementById("url").innerHTML = obj.url;
            document.getElementById("url").href = obj.url;
            document.getElementById("author").innerHTML = obj.author;
            document.getElementById("released").innerHTML = obj.released;
            document.getElementById("story").innerHTML = obj.story;
        }
    });
};

function checkDate() {
    //TODO: write function to display articles from given date
    var searchDate = document.getElementById('searchdate').value;
};

function checkKeyword() {
    //TODO: write function to display articles from given keyword
    var searchKeyword = document.getElementById('keyword').value;
};
   
document.getElementById("author").addEventListener("submit", checkAuthor());