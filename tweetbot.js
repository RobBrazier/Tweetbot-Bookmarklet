if(window.location.hostname.indexOf('twitter.com') !== -1){
  // Check if viewing direct messages

  if(document.getElementById('dm_dialog').style.display === "block"){
    window.location = 'tweetbot://direct_messages';
    throw 'exit';
  }

  // Check if is homepage

  if(window.location.pathname == "/"){
    window.location = 'tweetbot:///timeline';
    throw 'exit';
  }

  // Check if viewing lists

  if(window.location.pathname.split('/')[2] == "lists"){
    window.location = 'tweetbot:///lists';
    throw 'exit';
  }

  // Check if viewing favourites

  if(window.location.pathname.split('/')[1] == "favorites"){
    window.location = 'tweetbot:///favorites';
    throw 'exit';
  }

  // Check if viewing status

  if(window.location.pathname.split('/')[2] == "status"){
    window.location = 'tweetbot:///status/'+window.location.pathname.split('/')[3];
    throw 'exit';
  }

  // Check if searching

  if(window.location.pathname.split('/')[1] == "search" && window.location.search){
    var search = window.location.search.split('&')[0];
    search = search.split('?q=')[1];
    window.location = 'tweetbot:///search?query='+search;
    throw 'exit';
  } else if(window.location.pathname.split('/')[1] == "search-home"){
    window.location = 'tweetbot:///search';
    throw 'exit';
  }

  // Check if viewing user profile

  if(window.location.pathname.split('/')[1] && !window.location.pathname.split('/')[2] && window.location.pathname.split('/')[1] !== 'lists' && window.location.pathname.split('/')[1] !== 'favourites' && window.location.pathname.split('/')[1] !== 'status' && window.location.pathname.split('/')[1] !== 'search' && window.location.pathname.split('/')[1] !== 'search-home'){
    window.location = 'tweetbot:///user_profile/'+window.location.pathname.split('/')[1];
    throw 'exit';
  }
}