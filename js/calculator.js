/* Hidden Revenue Calculator Logic - Enhanced Version */

const RevenueCalculator = {
    // Default values
    sessions: 200,
    reimbursement: 120,
    denialRate: 15,
    recoveryRate: 0.60, // 60% recovery rate (conservative estimate)

    // Industry benchmarks
    benchmarks: {
        avgSessions: 250,
        avgReimbursement: 130,
        avgDenialRate: 18
    },

    // DOM elements
    elements: {},

    // Formspree endpoint
    FORMSPREE_URL: "https://formspree.io/f/xkgelwbw",

    init: function () {
        // Get all DOM elements
        this.elements = {
            sessionsSlider: document.getElementById('sessionsSlider'),
            reimbursementSlider: document.getElementById('reimbursementSlider'),
            denialSlider: document.getElementById('denialSlider'),
            sessionsValue: document.getElementById('sessionsValue'),
            reimbursementValue: document.getElementById('reimbursementValue'),
            denialValue: document.getElementById('denialValue'),
            tickerAmount: document.getElementById('tickerAmount'),
            monthlyRisk: document.getElementById('monthlyRisk'),
            monthlyRecovery: document.getElementById('monthlyRecovery'),
            annualRecovery: document.getElementById('annualRecovery'),
            emailBtn: document.getElementById('emailResultsBtn'),
            saveBtn: document.getElementById('saveResultsBtn'),
            emailModal: document.getElementById('emailModal'),
            emailModalClose: document.getElementById('emailModalClose'),
            emailForm: document.getElementById('emailResultsForm'),
            benchmarkIndicator: document.getElementById('benchmarkIndicator')
        };

        // Check if calculator exists on this page
        if (!this.elements.sessionsSlider) return;

        // Add event listeners
        this.elements.sessionsSlider.addEventListener('input', (e) => this.updateSessions(e.target.value));
        this.elements.reimbursementSlider.addEventListener('input', (e) => this.updateReimbursement(e.target.value));
        this.elements.denialSlider.addEventListener('input', (e) => this.updateDenialRate(e.target.value));

        // Email and Save buttons
        if (this.elements.emailBtn) {
            this.elements.emailBtn.addEventListener('click', () => this.openEmailModal());
        }
        if (this.elements.saveBtn) {
            this.elements.saveBtn.addEventListener('click', () => this.saveResults());
        }

        // Email modal
        if (this.elements.emailModalClose) {
            this.elements.emailModalClose.addEventListener('click', () => this.closeEmailModal());
        }
        if (this.elements.emailModal) {
            this.elements.emailModal.addEventListener('click', (e) => {
                if (e.target === this.elements.emailModal) this.closeEmailModal();
            });
        }
        if (this.elements.emailForm) {
            this.elements.emailForm.addEventListener('submit', (e) => this.sendEmail(e));
        }

        // Load saved results if available
        this.loadSavedResults();

        // Initial calculation
        this.calculate();

        // Track page view
        this.trackEvent('calculator_view', {
            event_category: 'Calculator',
            event_label: 'Page View'
        });
    },

    updateSessions: function (value) {
        this.sessions = parseInt(value);
        this.elements.sessionsValue.textContent = this.sessions;
        this.updateSliderBackground(this.elements.sessionsSlider);
        this.calculate();

        // Track slider interaction
        this.trackEvent('calculator_slider_change', {
            event_category: 'Calculator',
            event_label: 'Sessions Slider',
            value: this.sessions
        });
    },

    updateReimbursement: function (value) {
        this.reimbursement = parseInt(value);
        this.elements.reimbursementValue.textContent = '$' + this.reimbursement;
        this.updateSliderBackground(this.elements.reimbursementSlider);
        this.calculate();

        // Track slider interaction
        this.trackEvent('calculator_slider_change', {
            event_category: 'Calculator',
            event_label: 'Reimbursement Slider',
            value: this.reimbursement
        });
    },

    updateDenialRate: function (value) {
        this.denialRate = parseInt(value);
        this.elements.denialValue.textContent = this.denialRate + '%';
        this.updateSliderBackground(this.elements.denialSlider);
        this.calculate();

        // Track slider interaction
        this.trackEvent('calculator_slider_change', {
            event_category: 'Calculator',
            event_label: 'Denial Rate Slider',
            value: this.denialRate
        });
    },

    updateSliderBackground: function (slider) {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const value = parseFloat(slider.value);
        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
    },

    calculate: function () {
        // Monthly at-risk revenue = sessions × reimbursement × (denial rate / 100)
        const monthlyRisk = this.sessions * this.reimbursement * (this.denialRate / 100);

        // Monthly recoverable = monthly at-risk × recovery rate
        const monthlyRecoverable = monthlyRisk * this.recoveryRate;

        // Annual recovery = monthly recoverable × 12
        const annualRecovery = monthlyRecoverable * 12;

        // Update display with animation
        this.animateValue(this.elements.monthlyRisk, monthlyRisk, true);
        this.animateValue(this.elements.monthlyRecovery, monthlyRecoverable, true);
        this.animateValue(this.elements.annualRecovery, annualRecovery, true);
        this.animateValue(this.elements.tickerAmount, annualRecovery, false);

        // Update benchmark indicator
        this.updateBenchmarkIndicator(annualRecovery);

        // Track calculation
        this.trackEvent('calculator_result_view', {
            event_category: 'Calculator',
            event_label: 'Calculation Complete',
            value: Math.round(annualRecovery)
        });
    },

    updateBenchmarkIndicator: function (annualRecovery) {
        if (!this.elements.benchmarkIndicator) return;

        // Calculate benchmark recovery
        const benchmarkMonthlyRisk = this.benchmarks.avgSessions * this.benchmarks.avgReimbursement * (this.benchmarks.avgDenialRate / 100);
        const benchmarkAnnualRecovery = benchmarkMonthlyRisk * this.recoveryRate * 12;

        const percentDiff = ((annualRecovery - benchmarkAnnualRecovery) / benchmarkAnnualRecovery) * 100;

        let message = '';
        let className = '';

        if (percentDiff > 10) {
            message = `📈 ${Math.round(percentDiff)}% above industry average`;
            className = 'benchmark-above';
        } else if (percentDiff < -10) {
            message = `📉 ${Math.abs(Math.round(percentDiff))}% below industry average`;
            className = 'benchmark-below';
        } else {
            message = '✓ Within industry average range';
            className = 'benchmark-average';
        }

        this.elements.benchmarkIndicator.textContent = message;
        this.elements.benchmarkIndicator.className = 'benchmark-indicator ' + className;
    },

    animateValue: function (element, targetValue, showDollar) {
        if (!element) return;

        const currentValue = parseFloat(element.textContent.replace(/[$,]/g, '')) || 0;
        const duration = 800; // Animation duration in ms
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const value = currentValue + (targetValue - currentValue) * easeProgress;
            const formattedValue = this.formatCurrency(value, showDollar);

            element.textContent = formattedValue;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value is exact
                element.textContent = this.formatCurrency(targetValue, showDollar);
            }
        };

        requestAnimationFrame(animate);
    },

    formatCurrency: function (value, showDollar = true) {
        const rounded = Math.round(value);
        const formatted = rounded.toLocaleString('en-US');
        return showDollar ? '$' + formatted : formatted;
    },

    // Email functionality
    openEmailModal: function () {
        if (this.elements.emailModal) {
            this.elements.emailModal.style.display = 'flex';
            this.trackEvent('calculator_email_modal_open', {
                event_category: 'Calculator',
                event_label: 'Email Modal Opened'
            });
        }
    },

    closeEmailModal: function () {
        if (this.elements.emailModal) {
            this.elements.emailModal.style.display = 'none';
        }
    },

    sendEmail: function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('userEmail');
        const nameInput = document.getElementById('userName');
        const submitBtn = e.target.querySelector('button[type="submit"]');

        if (!emailInput || !nameInput) return;

        const email = emailInput.value;
        const name = nameInput.value;

        // Disable button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Calculate current values
        const monthlyRisk = this.sessions * this.reimbursement * (this.denialRate / 100);
        const monthlyRecoverable = monthlyRisk * this.recoveryRate;
        const annualRecovery = monthlyRecoverable * 12;

        // Prepare form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', 'Your Hidden Revenue Calculator Results');
        formData.append('message', `
Calculator Results for ${name}

Your Practice Details:
- Monthly Patient Sessions: ${this.sessions}
- Average Reimbursement: $${this.reimbursement}
- Current Denial/Aging Rate: ${this.denialRate}%

Your Potential Recovery:
- Monthly At-Risk Revenue: ${this.formatCurrency(monthlyRisk)}
- Monthly Recoverable (60% rate): ${this.formatCurrency(monthlyRecoverable)}
- Annual Recovery Potential: ${this.formatCurrency(annualRecovery)}

These estimates are based on a conservative 60% recovery rate from aged A/R (60-180+ days). Actual results may vary based on payer mix, claim complexity, and documentation quality.

Ready to start recovering this revenue? Schedule your free 20-claim pilot: https://www.veldenhealth.com/contact.html
    `);

        // Send via Formspree
        fetch(this.FORMSPREE_URL, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    alert('✅ Results sent! Check your email for your personalized recovery estimate.');
                    this.closeEmailModal();
                    emailInput.value = '';
                    nameInput.value = '';

                    // Track successful email send
                    this.trackEvent('calculator_email_sent', {
                        event_category: 'Calculator',
                        event_label: 'Results Emailed',
                        value: Math.round(annualRecovery)
                    });
                } else {
                    alert('❌ Failed to send email. Please try again or contact us directly.');
                }
            })
            .catch(() => {
                alert('❌ Network error. Please check your connection and try again.');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Results';
            });
    },

    // Save results to localStorage
    saveResults: function () {
        const results = {
            sessions: this.sessions,
            reimbursement: this.reimbursement,
            denialRate: this.denialRate,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('veldenCalculatorResults', JSON.stringify(results));
        alert('✅ Results saved! Your calculation will be restored when you return.');

        this.trackEvent('calculator_results_saved', {
            event_category: 'Calculator',
            event_label: 'Results Saved to LocalStorage'
        });
    },

    // Load saved results from localStorage
    loadSavedResults: function () {
        const saved = localStorage.getItem('veldenCalculatorResults');
        if (!saved) return;

        try {
            const results = JSON.parse(saved);

            // Update sliders
            if (this.elements.sessionsSlider) {
                this.elements.sessionsSlider.value = results.sessions;
                this.updateSessions(results.sessions);
            }
            if (this.elements.reimbursementSlider) {
                this.elements.reimbursementSlider.value = results.reimbursement;
                this.updateReimbursement(results.reimbursement);
            }
            if (this.elements.denialSlider) {
                this.elements.denialSlider.value = results.denialRate;
                this.updateDenialRate(results.denialRate);
            }

            this.trackEvent('calculator_results_loaded', {
                event_category: 'Calculator',
                event_label: 'Results Loaded from LocalStorage'
            });
        } catch (e) {
            console.error('Failed to load saved results:', e);
        }
    },

    // Analytics tracking helper
    trackEvent: function (eventName, params = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, params);
        }

        // Fallback console log for development
        if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
            console.log('📊 Analytics Event:', eventName, params);
        }
    }
};

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    RevenueCalculator.init();
});

