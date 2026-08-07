
function makeRateLimiter(maxRequests, timeWindow) {
    let requests = 0;
    let lastReset = Date.now();

    return function() {
        if (Date.now() - lastReset >= timeWindow) {
            requests = 0;
            lastReset = Date.now();
        }

        if (requests < maxRequests) {
            requests++;
            return true;
        }

        return false;
    };
}