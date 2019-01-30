[![Netlify Status](https://api.netlify.com/api/v1/badges/f1ff9daf-4123-4b27-9aab-761073812859/deploy-status)](https://app.netlify.com/sites/guillaumebriday/deploys)

# guillaumebriday.fr

Source code of [guillaumebriday.fr](https://guillaumebriday.fr) built with [Jekyll](http://jekyllrb.com/), [Webpack](https://webpack.js.org/), [Tailwind CSS](https://tailwindcss.com/) and [Vue.js](https://vuejs.org/).

## Installation

```bash
$ bundle install
$ yarn
```

## Development

The current folder will be generated into ./_site :
```bash
$ jekyll build
```

Building the assets with Webpack :
```bash
$ yarn dev

# Or

$ yarn watch

# Or

$ yarn prod
```

Running ESLint :
```bash
$ yarn lint
```

Build the site on the preview server :
```bash
$ jekyll serve --config _config.yml,_config.dev.yml
$ open http://127.0.0.1:4000/
```

## Production

```bash
$ yarn prod
$ JEKYLL_ENV=production jekyll build
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
