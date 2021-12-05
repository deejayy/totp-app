# TuFA, Timed one-time-password (TOTP) application

Made with Angular 12 and Material.

Ready-to-use: https://tufa.cv.co.hu

(you can put to your homescreen on android)

Needs javascript and access to localStorage. Does not send any data to any server, everything is stored locally - which means, if you clear your browsing data or use in incognito, it will lose whatever tokens were added, so be aware.

## Build yourself

```bash
git clone https://github.com/deejayy/totp-app
cd totp-app
npm i
ng b
```

## Node-webkit

NW.js (formerly node-webkit) enables you to run web apps as desktop apps, similarly to electron, but almost zero-config. The built application contains the manifest file for nw.js to work.

Copy ./dist/totp-app into some secure drive / folder you have and run the following:

```bash
nw --user-data-dir=./data totp-app
```

This will create the user data dir next to the app in a secure location and in the same time makes it portable. Create a batch file or script for shortcut.

Preview:

![image](https://user-images.githubusercontent.com/3474106/142775183-25b9bcb3-df56-4d32-955d-b07f54c0730d.png)
