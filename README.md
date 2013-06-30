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

As far as I know, for some reason this does not currently work on mobile devices. Any suggestions on improvements/pull requests are welcome!

[Open in Tweetbot](javascript:(function(){if(window.location.hostname.indexOf('twitter.com')!==-1){if(document.getElementById('dm_dialog').style.display===%22block%22){window.location='tweetbot://direct_messages';throw%20'exit';}if(window.location.pathname==%22/%22){window.location='tweetbot:///timeline';throw%20'exit';}if(window.location.pathname.split('/')[2]==%22lists%22){window.location='tweetbot:///lists';throw%20'exit';}if(window.location.pathname.split('/')[1]==%22favorites%22){window.location='tweetbot:///favorites';throw%20'exit';}if(window.location.pathname.split('/')[2]==%22status%22){window.location='tweetbot:///status/'+window.location.pathname.split('/')[3];throw%20'exit';}if(window.location.pathname.split('/')[1]==%22search%22%20%26%26%20window.location.search){var%20search=window.location.search.split('%26')[0];search=search.split('%3Fq=')[1];window.location='tweetbot:///search%3Fquery='+search;throw%20'exit';}else%20if(window.location.pathname.split('/')[1]==%22search-home%22){window.location='tweetbot:///search';throw%20'exit';}if(window.location.pathname.split('/')[1]%26%26%20!window.location.pathname.split('/')[2]%26%26%20window.location.pathname.split('/')[1]!=='lists'%20%26%26%20window.location.pathname.split('/')[1]!=='favourites'%20%26%26%20window.location.pathname.split('/')[1]!=='status'%20%26%26%20window.location.pathname.split('/')[1]!=='search'%20%26%26%20window.location.pathname.split('/')[1]!=='search-home'){window.location='tweetbot:///user_profile/'+window.location.pathname.split('/')[1];throw%20'exit';}}})();)