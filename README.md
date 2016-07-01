

# TopHeader Component
This is a responsive layout web top header component, made by meteor and react.

## Usage
in App.jsx file, u can:
return the menus from renderNav method:
```js
renderNav() {
  return [
    { _id: 1, text: 'MENU1', submenus: ['SUBMENU1', 'SUBMENU2'] },
    { _id: 2, text: 'MENU2', submenus: null},
    { _id: 3, text: 'MENU3', submenus: ['SUBMENU3', 'SUBMENU4', 'SUBMENU5'] },
  ];
}

```
and set logo by:
```js
<img id="logo-meteor-home" src="" alt="Home Page"/>

```

## Demo

![Demo](https://raw.githubusercontent.com/ZackLeonardo/TopHeader-meteor/master/example.gif)


## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Zou Deyi
