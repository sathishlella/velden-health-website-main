/* Component Loader - Dynamically loads reusable HTML components */

const ComponentLoader = {
    // Load a component and inject it into the specified element
    loadComponent: async function (componentPath, targetElementId) {
        try {
            const response = await fetch(componentPath);

            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath} (${response.status})`);
            }

            const html = await response.text();
            const targetElement = document.getElementById(targetElementId);

            if (targetElement) {
                targetElement.innerHTML = html;

                // Update year in footer if element exists
                const yearElement = document.getElementById('year');
                if (yearElement) {
                    yearElement.textContent = new Date().getFullYear();
                }

                return true;
            } else {
                console.warn(`Target element #${targetElementId} not found`);
                return false;
            }
        } catch (error) {
            console.error('Component loading error:', error);
            return false;
        }
    },

    // Initialize all components on page load
    init: function () {
        // Load footer component
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            this.loadComponent('components/footer.html', 'footer-placeholder');
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ComponentLoader.init());
} else {
    // DOM already loaded
    ComponentLoader.init();
}
