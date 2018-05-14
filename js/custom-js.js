(function{
  let $ = function(element) {
    if (this === window) return new $(element)

    if(element instanceof Object){
      this.element = element
    }
    else {
        this.element = getElement(element);
    }
    return this;
  }

  let forEach = function(items, callback, scope) {
    for (var i = 0; i < items.length; i++) {
      callback.call(scope, i, items[i])
    }
  }


  let callFungsi = function(items,callback,scope){
    if(items.length){
      forEach(items,function(index,element){
        callback.call(scope,index,element);
      });
    }
    else{
      callback.call(scope,index,items);
    }
  }


  $.prototype.text = function(text) {

    callFungsi(this.element, function(index,element)){
      element.innerHTML = text
    }

    return this;

  };

  $.prototype.css = function(property , value){

    callFungsi(this.element, function(index,element){
      element.style[property] = value;
    })

    return this;
  }

  $.prototype.on = function(eventName , callback){

    callFungsi(this.element, function(index,element){
      element.addEventListener(eventName,callback);
    })

    return this;
  }


  let getElement = function(element) {


    letter = element.charAt(0);

    if (element.indexOf(',') >= 0 || element.indexOf(' ') >= 0) {
      return document.querySelectorAll(element);
    }

    switch (letter) {
      case '#':
        return document.getElementById(element.subtr(1));
        break;
      case ".":
        return document.getElementsByClassName(element.substr(1));
        break;
      case "[":
        return document.querySelectorAll(element);
        break;
      default:
        return document.getElementsByTagName(element)

    }

  }

  window.$ = $;
})();
