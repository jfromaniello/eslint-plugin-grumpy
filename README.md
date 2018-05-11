A collection of sweet but very opionated rules for ESLint by José F. Romaniello.

Current rules:

-  [no-enterprise](docs/rules/no-enterprise.md) avoid writing things with names such as `Repository`, `Service`, etc.

## Installing

```
npm i eslint-plugin-grumpy --save
```

Then in your eslint config:

```
  "plugins": [
    "grumpy"
  ],
  "rules": {
    ....
    'grumpy/no-enterprise': "error"
  }
```

## License

MIT 2018 - José F. Romaniello
