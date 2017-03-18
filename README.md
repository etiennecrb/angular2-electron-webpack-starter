# angular2-electron-webpack-starter

This is a simple example of a dev environment for [Electron](https://electron.atom.io/) and [Angular](https://angular.io/) (optional) built with [Webpack](https://webpack.js.org/).

## Motivation
Many Electron/Angular starters have a lots of features. Some of them are useless for your own project, some are missing and it's sometimes hard to clean this up and to create a custom starter. This repo proposes a very simple configuration for Electron projects. Easy to understand, it offers some features often left aside.

## Features
- Typescript everywhere (even in main process)
- Shared code between main and renderer processes
- Multiple windows (see `app-main` and `app-minor`)
- Angular wrapper for Electron's API with [`ngx-electron`](https://github.com/ThorstenHans/ngx-electron/)

## Use cases
An Electron app is not always a web app wrapped up for desktop. For [this other project](https://github.com/etiennecrb/poker-hud), I need Node.js API to access file system and run asynchronous computation. I also needed to share some models between my Angular app and the main process and I have multiple windows (renderer processes) that communicate with Electron. If you share some of these, this starter can give you some ideas.
