# React set up with parcel

## Steps

:one: Install dependencies

```
$ npm init -y

$ npm i --save react react-dom
$ npm i --save-dev @babel/core @babel/preset-react @babel/preset-env parcel-bundler
```

:two: Create a .babelrc file with the preset installed previously.
This provide us the use of ES6 and React JSX

```.babelrc
{
  "presets": ["@babel/preset-react"]
}
```

:three: Create a javascript file with the following content
NOTE: Remember you have to include it in the html file you use

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MainComponent extends Component {
  render() {
    return <div>This is the main component</div>;
  }
}

ReactDOM.render(
  <MainComponent></MainComponent>,
  document.getElementById("app")
);
```

:four: Now, let's create an index.html with the following content

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>

  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

:five: Create the npm script which will start our application. This is done
in the **package.json** in the scripts object.

```
"dev" : "parcel index/html"
```

:six: Now you will be able to execute the following command in your terminal

```
$ npm run dev
```

:tada: You will see your react app in the following link (http://localhost:1234)[http://localhost:1234]
