tsimiviz = function(){
  tsimiviz = {};

  tsimiviz.foo = "bar";
  tsimiviz.hello = function(){
    return 'hello world';
  }

  return tsimiviz  
}

import * as mod from "modules/hello";