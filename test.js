console.log('Testing...');

let shouldFail = true;

if (shouldFail) {
    console.error('Testing failed');
    process.exit(1);
}

console.log('Testing passed');
