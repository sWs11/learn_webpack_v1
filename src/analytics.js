function createAnalytics() {
    let counter = 0;
    let is_destroyed = false;
    const listener = () => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            is_destroyed = true;
        },

        getClicks() {
            if (is_destroyed) {
                return 'Analytics is destroyed'
            }

            return counter;
        }
    }
}

window.analytics = createAnalytics();