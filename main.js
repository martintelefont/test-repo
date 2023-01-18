//I am thing to figure out what structure this library needs
//for it to work in observablehq with the import function
//and in a normal webpage environment using the <script> tags

tsimiviz = function(){
  tsimiviz = {};

  tsimiviz.foo = "bar";
  tsimiviz.hello = function(){
    return 'hello world';
  }

  return tsimiviz
}


import * as mod from "/modules/hello";