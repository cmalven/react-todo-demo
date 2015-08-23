# React Todo Demo

A super-simple React demo

----

## Getting Started

This demo uses [Meteor](http://meteor.com) for data persistence, but the project separates the Meteor-specific code & logic as much as possible so you can focus on understanding what React is doing.

```
# Install Meteor
curl https://install.meteor.com | /bin/sh

# Start the App
meteor
```

## Project Structure

For the React side of things, you really only need to worry about the following directories/files:

`index.html`  
Contains the `<div id="root"></div>` that React targets.

`/client/main.jsx`  
This is where our app kicks off. Here we're setting up our data persistence layer `TodoStore` (which you don't need to worry about unless you want to) then telling our app to render our React `<App />` component every time the data changes. Finally, we render `<App />` for the first time when Meteor starts up.

`/lib/components`  
All of our React components live in here. `app.jsx` is the root component that sets up everything else. 