this.addEventListener('message', function(e) {
    console.log(3, e)
    this.postMessage(e.data);
  }, false);