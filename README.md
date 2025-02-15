# git-hooks-demo
Showing how git hooks work

## Resources

Check out my blog post on Git Hooks here: [blog.bornais.ca/posts/2025-02-06-git-hooks](https://blog.bornais.ca/posts/2025-02-06-git-hooks/)

## Sample Hooks

### Sample `pre-commit` to run `npm run lint`

```sh
#!/bin/sh

# Check if the current directory is "subdir"
if [ "$(basename "$PWD")" != "subdir" ]; then
    cd subdir || { echo "Failed to enter subdir"; exit 1; }
fi

echo "Running linting..."
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Commit aborted."
    exit 1
fi
```

### Sample `pre-push` to run `npm run test`

```sh
#!/bin/sh

# Check if the current directory is "subdir"
if [ "$(basename "$PWD")" != "subdir" ]; then
    cd subdir || { echo "Failed to enter subdir"; exit 1; }
fi

echo "Running tests..."
npm run test
if [ $? -ne 0 ]; then
    echo "Testing failed. Push aborted."
    exit 1
fi
```