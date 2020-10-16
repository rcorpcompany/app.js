# App.js

Makes web apps closer to desktop apps (web and electron).

It sets the "default" cursor as the default and disables text selection for the entire application.

## Installation

Using npm:
```shell
$ npm i @rcorp/app.js
```

In your project:
```js
import '@rcorp/app.js';
```

## How to use

Add the class to the element to:

#### Enable right clicking on the element
```
allow-right-click
```

#### Disable right clicking on the element
```
disable-right-click
```

#### Enables text selection on the element
```
selectable
```

Inputs of type "text", "password", "email" and TextArea the right click is already activated by default.

## Example

```html
<p class="selectable allow-right-click">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
```
