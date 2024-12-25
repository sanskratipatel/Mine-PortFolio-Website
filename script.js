// JavaScript for Tab Switching (for skills, soft skills, certificates, experience, education)
// Tab functionality
function opentab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tabcontents');
    tabContents.forEach(content => {
        content.classList.remove('activetab');
    });

    // Remove active link class from all tab links
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(link => {
        link.classList.remove('activelink');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('activetab');
    // Add active link class to the clicked tab link
    event.currentTarget.classList.add('activelink');
}

// Set the default active tab
document.addEventListener('DOMContentLoaded', () => {
    opentab('skills'); // Default tab
});