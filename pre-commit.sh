#!/bin/sh

# if we're not in the 'subdir' directory, cd to it
if [ ! -d "subdir" ]; then
    cd subdir
fi

echo "Running linting..."
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Commit aborted."
    exit 1
fi
