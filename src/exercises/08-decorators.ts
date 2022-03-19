
//typescript basics

//The following is an example of a class decorator (@sealed) applied to a BugReport class:

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

//We can define the @sealed decorator using the following function declaration:

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }