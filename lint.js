console.log('Linting...');

let shouldFail = false;

if (shouldFail) {
    console.error('Linting failed');
    process.exit(1);
}

console.log('Linting passed');
