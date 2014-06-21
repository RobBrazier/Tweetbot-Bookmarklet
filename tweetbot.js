if (window.location.hostname.indexOf("twitter.com") !== -1) {
  var pathname = window.location.pathname.split("/");

  // Check if is homepage
  if (window.location.pathname === "/") {
    window.location = "tweetbot:///timeline";
  }

  // Check if viewing lists
  if (pathname[2] === "lists") {
    window.location = "tweetbot:///lists";
  }

  // Check if viewing favourites
  if (pathname[1] === "favorites") {
    window.location = "tweetbot:///favorites";
  }

  // Check if viewing status
  if (pathname[2] === "status") {
    window.location = "tweetbot:///status/" + pathname[3];
  }

  // Check if searching
  if (pathname[1] === "search" && window.location.search) {
    var search = window.location.search.split("&")[0];
    search = search.split("?q=")[1];
    window.location = "tweetbot:///search?query=" + search;
  } else if (pathname[1] === "search-home") {
    window.location = "tweetbot:///search";
  }

  // Check if viewing user profile
  var user_profile_excludes = ["lists", "favourites", "status", "search", "search-home"];
  if (pathname.length === 2 && user_profile_excludes.indexOf(pathname[1]) === -1) {
    window.location = "tweetbot:///user_profile/" + pathname[1];
  }
}
