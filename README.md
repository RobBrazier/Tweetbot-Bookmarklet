Tweetbot-Bookmarklet
====================

This is a small Bookmarklet to enable you to be redirected to the same content on twitter.com, but in Tweetbot.

What this works for
-------------------

* [View your Timeline by using the bookmarklet on twitter.com](https://twitter.com)
* [View your Lists](https://twitter.com/lists)
* [View your Favourites](https://twitter.com/favorites)
* [View a status](https://twitter.com/jack/status/20)
* [Searching for something](https://twitter.com/search?q=%28╯°□°）╯︵%20┻━┻%29)
* [Viewing user profiles](https://twitter.com/robbrazier_)

How to use this
---------------

To use this, you need to create a bookmark containing:

```javascript
javascript:(function(){s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://rawgit.com/RobBrazier/Tweetbot-Bookmarklet/master/tweetbot.js%22;document.getElementsByTagName(%22head%22)[0].appendChild(s);})();
```

or drag this link to your Bookmarks Bar: [Send to Tweetbot](javascript:(function(){s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://rawgit.com/RobBrazier/Tweetbot-Bookmarklet/master/tweetbot.js%22;document.getElementsByTagName(%22head%22)[0].appendChild(s);})();)

When you are on a Twitter.com page you can then open this bookmark and you will be switched to Tweetbot.

Contributing
------------

Any suggestions on improvements/pull requests are welcome!
