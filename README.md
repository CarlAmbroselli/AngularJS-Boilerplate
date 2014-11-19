# ngBoilerplate

An opinionated kickstarter for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone  --depth=1 git://github.com/CarlAmbroselli/AngularJS-Boilerplate project_name
$ cd project_name
$ npm install
$ bower install
$ update `baseUrl` in `protractor/protractor-unit.tpl.js` to match your local url
$ grunt watch
```

## Commands
- `grunt watch` - Development mode, will run e2e tests once and then unit tests every time a file changes + automatically builds
- `grunt` - Deploy mode, will also compile / compress files after building and place it under /bin

Happy hacking!


### Live Reload!

You no longer have to refresh your page after making changes! You need a Live Reload
browser plugin for this:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)

Note that if you're using the Chrome version with `file://` URLs (as is the
default with `ngBoilerplate`) you need to tell Live Reload to allow it. Go to
`Menu -> Tools -> Extensions` and check the "Allow access to file URLs" box next
to the Live Reload plugin.

When you load your page, click the Live Reload icon in your toolbar and
everything should work magically. w00t!

If you'd prefer to not install a browser extension, then you must add the
following to the end of the `body` tag in `index.html`:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

Boom!
