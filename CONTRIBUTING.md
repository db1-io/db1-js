## Package Manager

We're using `pnpm` as a package manager for this repo. Install it using:

```
npm install -g pnpm
```

## Development

Start the test:

```
pnpm test
```

Do the changes, and make sure the tests are passing.

## Release Process

Bump the package version according to [semver](https://semver.org/):

```text
pnpm version [major | minor | patch]
```

> This command will bump the version in `package.json` and create a version commit and tag.

Push the changes to GitHub:

```
git push
```

A [GitHub Action](https://github.com/db1-io/db1-js/actions/workflows/release_package.yaml) will automatically publish the new version to [npm](https://www.npmjs.com/package/db1).
