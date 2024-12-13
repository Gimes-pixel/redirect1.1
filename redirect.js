function redirectToUrl() {
    // Get the URL entered in the input field
    const inputElement = document.getElementById('url');
    const url = inputElement.value;

    try {
        // Validate the URL to ensure it's correct
        const validUrl = new URL(url);

        // Open a new blank window (about:blank)
        const newWindow = window.open('about:blank', '_blank');

        if (newWindow) {
            // Create an iframe to load the target URL
            const iframe = newWindow.document.createElement('iframe');
            iframe.src = validUrl.href;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            // Add a sandbox attribute to limit interactions
            iframe.sandbox = 'allow-scripts allow-same-origin';

            // Add a referrer policy to hide the origin
            iframe.referrerPolicy = 'no-referrer';

            // Append the iframe to the blank page
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
