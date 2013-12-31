# mgo-mousetrap 

This is a library that lets you handle keyboard interaction on an Angular app. It's an Angular Mousetrap wrapper for the awesome [MouseTrap library](http://craig.is/killing/mice) which takes care of binding key strokes to some function.

## Usage

### Add mgo-mousetrap scripts and module

First of all, you need to include both mousetrap.js and wMousetrap.js in your index.html file. mousetrap.js is copied from its repository, with its corresponding Apache 2 license.

Then, you need to add mgo-mousetrap module as a dependency of your app as follows:

````js
angular.module('myCoolApp', ['mgo-mousetrap']);
````

### Just use it

Now you're prepared to use it. For that, you can add this directive to any field and state which keys and actions will happen. For example, let's look at the following pager:

````html
<div class="pager" w-mousetrap="{left: previousPage, right: nextPage}">
  <li ng-click="previousPage()">Previous</li>
  <li ng-repeat="page in pages" ng-click="goTopage(page)">{{page}}</li>
  <li ng-click="nextPage()">Next</li>
</div>
````

Check the pager div, we're setting an object where its keys are the keyboard shortcut to press and the value are the functions to execute once those keys have been clicked.

Let's check a more complex example:

````html
<input type="button" value="Make super cool action" ng-click="superCoolAction()" w-mousetrap="{'command+shift+k': superCoolAction}" />
````

In here, when the user clicks command + shift + k, then the super cool action is going to be run. Please notice the `''` that wraps the key. This are needed if the key contains some "not normal" character like `+`, `*`, etc.

In every `w-mousetrap` attribute you can define ANY number of key shortcuts :).

You can also receive the event that's called with mousetrap to call `preventDefault` or `stopPropagation`. For example, `superCoolAction` might look like:

````js
$scope.superCoolAction = function(event) {
    event.preventDefault();
    alert("Super cool");
}
````

Hope you guys like this!!!


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mgonto/mgo-mousetrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

