function launchBrowser (browserName) {
    if (browserName === 'Chrome') {
        console.log("Chrome browser is launched")
    }
    else {
        console.log("Invalid browser name")
    }
}

function runTests (testType) {
    switch (testType) {
        case 'smoke':
            console.log("Smoke tests");
            break;
        case 'sanity':
            console.log("Sanity tests");
            break;
        case 'regression':
            console.log("Regression tests");
            break;
        default:
            console.log("Invalid test type");
            break;
    }
}

launchBrowser('Chrome');
launchBrowser('Edge');

runTests('smoke');
runTests('sanity');
runTests('regression');
runTests('performance');