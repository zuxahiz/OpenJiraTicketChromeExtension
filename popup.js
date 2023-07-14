document.addEventListener('DOMContentLoaded', function() {
  var openButton = document.getElementById('openButton');
  var linkInput = document.getElementById('linkInput');

  function openLink() {
    var link = linkInput.value;
    if (link) {
      var url = "https://urlprefix" + link
      chrome.tabs.create({ url: url });
    }
  }

  openButton.addEventListener('click', openLink);
  linkInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      openLink();
    }
  });
});
