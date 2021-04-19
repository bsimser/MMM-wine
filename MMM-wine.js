Module.register("MMM-wine",{
  // Default module config
  defaults: {
    text: "Hello World"
  },
  
  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
    return wrapper;
  }
  
  getScripts: function() {
    return [
      'MMM-wine.js'
    ]
  }
                
  getStyles: function() {
    return [
      'MMM-wine.css'
    ]
  }
});

