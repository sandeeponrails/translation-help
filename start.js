(function() {
    require("babel-register")({
      "presets": ["es2015", "react"],
       plugins: ['transform-decorators-legacy', 'transform-class-properties'],
      extensions: [".js", ".jsx"],
    });
  
    const  ReactDOM  = require('react-dom');
    var App = {
      init: function() {
        require("./require");
      }
    };
    window.App = App;
  })();
  
  document.addEventListener('DOMContentLoaded', App.init);
  