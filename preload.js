const path = require('path');
const url = require('url');

const customTitlebar = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#292626'),
    menu: false,
    icon: 'icon.png',
    titleHorizontalAlignment: 'left',
    overflow: 'hidden',
  }); 
})