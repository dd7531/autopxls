// ============================================= configure and run ============
function autopxls_loader(){
  var images = [
    {
      title: "TARDIS",
      x: 602,
      y: 463,
      image: "http://i.imgur.com/wrpOqWw.png" 
    },
    {
      title: "Napoleon RIP",
      x: 440,
      y: 574,
      image: "http://i.imgur.com/uot63Pq.png" 
    },
    {
      title: "El Gagarino",
      x: 60,
      y: 526,
      image: "http://i.imgur.com/mxjxBhS.png"
    },
    {
      title: "PIXELS",
      x: 248,
      y: 611,
      image: "http://i.imgur.com/kjzejr4.png"
    }
  ]

  var autopxls_script = document.createElement('script');
  autopxls_script.src = "https://rawgit.com/dd7531/autopxls/master/autopxls.js";
  autopxls_script.onload = function () {
    AutoPXLS(images);
  };
  document.head.appendChild(autopxls_script);
}