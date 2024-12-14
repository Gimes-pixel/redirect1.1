function redirectToUrl() {
    const inputElement = document.getElementById('url');
    const url = inputElement.value;

    try {
        const validUrl = new URL(url);
        const newWindow = window.open('about:blank', '_blank');

        if (newWindow) {
            const iframe = newWindow.document.createElement('iframe');
            iframe.src = `https://your-worker-subdomain.workers.dev?url=${encodeURIComponent(validUrl.href)}`;
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100vw';
            iframe.style.height = '100vh';
            iframe.style.border = 'none';
            iframe.sandbox = 'allow-scripts allow-same-origin';
            iframe.referrerPolicy = 'no-referrer';
            newWindow.document.body.style.margin = '0';
            newWindow.document.body.style.height = '100vh';
            newWindow.document.body.appendChild(iframe);
        } else {
            alert('Failed to open a new window. Check your browser settings.');
        }
    } catch (error) {
        alert('Invalid URL. Please enter a valid URL.');
    }
}
