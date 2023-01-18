tsimiviz = function(){
  tsimiviz = {};

  tsimiviz.foo = "bar";
  tsimiviz.hello = function(){
    return 'hello world';
  }

  return tsimiviz  
}

import * from "modules/hello"