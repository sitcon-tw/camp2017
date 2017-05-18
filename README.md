# camp2017

## How to build
``` sh
$ npm install && npm run build
```

## Deploy to `gh-pages`

Run this command in `master` branch

``` sh
$ npm run build && git checkout gh-pages && git checkout master assets/
```

Commit changes and push it.
