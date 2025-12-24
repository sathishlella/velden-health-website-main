/* Main JavaScript for Velden Health */

// ChatWidget Logic
const ChatWidget = {
  isOpen: false,
  elements: {},
  FORMSPREE_URL: "https://formspree.io/f/xkgelwbw",
  state: { step: 'idle', data: {} },

  init: function () {
    this.elements = {
      window: document.getElementById('chatWindow'),
      launcher: document.getElementById('chatLauncher'),
      messages: document.getElementById('chatMessages'),
      input: document.getElementById('chatInput'),
      micBtn: document.getElementById('micBtn'),
      sendBtn: document.getElementById('sendBtn'),
      typing: document.getElementById('typingIndicator')
    };

    if (this.elements.launcher) this.elements.launcher.addEventListener('click', () => this.toggle());
    if (this.elements.sendBtn) this.elements.sendBtn.addEventListener('click', () => this.send());
    if (this.elements.input) this.elements.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); this.send(); }
    });

    const SpeechConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechConstructor) {
      const recognition = new SpeechConstructor();
      recognition.lang = 'en-US';
      recognition.onresult = (e) => {
        if (this.elements.input) {
          this.elements.input.value = e.results[0][0].transcript;
          this.send();
        }
      };
      if (this.elements.micBtn) this.elements.micBtn.addEventListener('click', () => recognition.start());
    } else {
      if (this.elements.micBtn) this.elements.micBtn.style.display = 'none';
    }
  },

  toggle: function () {
    this.isOpen = !this.isOpen;
    if (this.elements.window) this.elements.window.classList.toggle('open', this.isOpen);
    if (this.elements.launcher) this.elements.launcher.classList.toggle('active', this.isOpen);
    if (this.isOpen && this.elements.input) setTimeout(() => this.elements.input.focus(), 400);
  },

  send: function () {
    if (!this.elements.input) return;
    const text = this.elements.input.value.trim();
    if (!text) return;
    this.addMessage(text, 'user');
    this.elements.input.value = '';
    this.showTyping();
    setTimeout(() => {
      const response = this.processLogic(text);
      this.hideTyping();
      this.addMessage(response, 'bot');
    }, 700);
  },

  formatText: function (text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  },

  addMessage: function (text, sender) {
    if (!this.elements.messages) return;
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = this.formatText(text);
    this.elements.messages.insertBefore(div, this.elements.typing);
    this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
  },

  showTyping: function () {
    if (this.elements.typing) {
      this.elements.typing.classList.add('active');
      if (this.elements.messages) this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }
  },
  hideTyping: function () {
    if (this.elements.typing) this.elements.typing.classList.remove('active');
  },

  sendToEmail: function (name, email) {
    const formData = new FormData();
    formData.append('clinic_name', name);
    formData.append('email', email);
    formData.append('source', 'Chatbot Conversation');

    fetch(this.FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            this.addMessage("✅ <b>Success!</b> I've emailed your details to our senior analyst. We will be in touch shortly.", 'bot');
          }, 1000);
        } else {
          this.addMessage("❌ I tried to send the email, but something went wrong. Please try again later.", 'bot');
        }
      })
      .catch(() => {
        this.addMessage("❌ Network error. Please check your connection.", 'bot');
      });
  },

  processLogic: function (input) {
    const lower = input.toLowerCase();

    if (this.state.step === 'awaiting_choice') {
      if (lower.includes('audit') || lower.includes('free') || lower.includes('pilot')) {
        this.state.step = 'awaiting_name';
        return "I can help you with that. To start your <b>20-Claim Pilot</b> or <b>Revenue Pulse Analysis</b>, what is the <b>Name of your Clinic</b>?";
      }
      if (lower.includes('pric') || lower.includes('cost')) {
        this.state.step = 'idle';
        return "Our 20-Claim Pilot is <b>Performance Based</b> (No upfront cost). For full ledger recovery, we operate on a percentage of the actual cash we recover for you.";
      }
      if (lower.includes('billing')) {
        this.state.step = 'idle';
        return "We handle correcting, resubmitting, and appealing aged and denied claims (60-180+ days). We don't replace your current biller; we clear their backlog.";
      }
    }

    if (this.state.step === 'awaiting_name') {
      this.state.data.name = input;
      this.state.step = 'awaiting_email';
      return `Understood. We'll set up the secure ingest for ${input}. What is your <b>work email address</b>?`;
    }

    if (this.state.step === 'awaiting_email') {
      const email = input;
      const name = this.state.data.name || 'Clinic';
      this.sendToEmail(name, email);
      this.state.step = 'idle';
      return "Transmitting to our secure vault... You will receive the <b>Revenue Pulse</b> report and Pilot instructions within 48 hours.";
    }

    if (lower.match(/^(hi|hello|hey|start)/)) {
      return "Hello! 👋 I'm the Velden Assistant. I help Illinois clinics recover revenue stuck in aged A/R. Would you like to start a <b>20-Claim Pilot</b> or get a <b>Revenue Pulse Analysis</b>?";
    }

    if (lower.match(/^(yes|ok|sure|help|assist)/)) {
      this.state.step = 'awaiting_choice';
      return "Surgical recovery initialized. Would you like to start the <b>20-Claim Pilot</b> or view the <b>Recovery Lifecycle</b>?";
    }

    if (lower.includes('about') || lower.includes('company') || lower.includes('who are you') || lower.includes('what do you do')) {
      return "Velden Health is a revenue cycle partner for U.S. clinics, specializing in <b>behavioral & mental health billing</b>, AR recovery, and denial management.";
    }

    if (lower.includes('billing') || lower.includes('claim') || lower.includes('code')) {
      return "We handle end-to-end billing: eligibility, coding, claims, AR follow-up, and payment posting. We’re especially strong in behavioral health codes like 90834, 90837, and 90791. Would you like a <b>Free Audit</b> of your current billing?";
    }

    if (lower.includes('audit') || lower.includes('free')) {
      this.state.step = 'awaiting_name';
      return "Our Free Audit finds hidden revenue leaks. To get started, please type your <b>Clinic Name</b>.";
    }

    if (lower.includes('pric') || lower.includes('cost')) {
      return "We usually work on a performance model: <b>3% - 6% of monthly collections</b> for full-service RCM, or hybrid and analytics-only options.";
    }

    if (lower.includes('human') || lower.includes('contact')) {
      return "You can reach our team directly at <b>info@veldenhealth.com</b> or the phone number listed in the footer.";
    }

    return "I didn't quite catch that. I can help with <b>Audits</b>, <b>Pricing</b>, or <b>Billing</b>. Which would you like to discuss?";
  }
};

// Kinetic Upgrades
const KineticEngine = {
  observer: null,

  init: function () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('kinetic-bar') || entry.target.classList.contains('kinetic-bar-vert')) {
            this.animateBar(entry.target);
          }
          if (entry.target.classList.contains('kinetic-count')) {
            this.animateCount(entry.target);
          }
          if (entry.target.id === 'flowChart') {
            this.animateFlow();
          }
          this.observer.unobserve(entry.target); // Run once
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.kinetic-bar, .kinetic-bar-vert, .kinetic-count').forEach(el => this.observer.observe(el));

    const flowChart = document.getElementById('flowChart');
    if (flowChart) this.observer.observe(flowChart);
  },

  animateBar: function (el) {
    setTimeout(() => el.classList.add('visible'), 100);
  },

  animateCount: function (el) {
    const targetStr = el.getAttribute('data-target');
    const target = parseInt(targetStr);
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    if (isNaN(target)) {
      el.textContent = targetStr;
      return;
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      el.textContent = Math.floor(start + (target - start) * ease);

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }

    requestAnimationFrame(update);
  },

  animateFlow: function () {
    const steps = document.querySelectorAll('.flow-step');
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add('active');
      }, index * 600);
    });
  }
};

// Haptic & Scroll Logic
const HapticEngine = {
  audioCtx: null,
  init: function () {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(e => console.log("Audio resume failed", e));
    }
  },
  trigger: function () {
    if (navigator.vibrate) navigator.vibrate(5);
    if (!this.audioCtx || this.audioCtx.state === 'suspended') this.init();
    if (this.audioCtx && this.audioCtx.state === 'running') {
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
      gainNode.gain.setValueAtTime(0, t);
      gainNode.gain.linearRampToValueAtTime(0.15, t + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.start(t);
      osc.stop(t + 0.15);
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // Initialize specific widgets
  ChatWidget.init();
  KineticEngine.init();

  // General Logic

  // Update Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile Nav Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active'); // Add active class for hamburger animation
    });
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active'); // Remove active class when closing
      }
    });
  }

  // Active Navigation Highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksAll = document.querySelectorAll('.nav-links a');
  navLinksAll.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Sticky Header
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Sticky CTA Button
  const stickyCTA = document.getElementById('stickyCTA');
  if (stickyCTA) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        stickyCTA.classList.add('visible');
      } else {
        stickyCTA.classList.remove('visible');
      }
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all FAQ items
          faqItems.forEach(i => i.classList.remove('active'));

          // Open clicked item if it wasn't already active
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // Intersection Observer for Reveals
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, observerOptions);
  document.querySelectorAll('.reveal-group').forEach(el => observer.observe(el));

  // Service Detail Logic (Tabs)
  const serviceData = {
    'medical-billing': {
      title: 'Medical Billing',
      tagline: 'Clean claims paid first time.',
      desc: 'Velden Health handles end-to-end billing: eligibility checks, coding review, claim scrubbing, electronic submission, and payment posting. We are experts in behavioral health coding nuances, including 90837 corrections and 90791 intake coding.',
      list: ['Eligibility & benefits', 'Coding review', 'Claim submission', 'Payment posting']
    },
    'ar-followup': {
      title: 'AR Recovery',
      tagline: 'Turn old AR buckets into cash.',
      desc: 'We build prioritized worklists and call payers directly to resolve unpaid claims that have been ignored.',
      list: ['Aged AR analysis', 'Payer calling', 'Denial resolution', 'Status reporting']
    },
    'denials': {
      title: 'Denial Management',
      tagline: 'Stop repeat denials forever.',
      desc: 'We analyze root causes, fix coding errors, and appeal wrongful denials while preventing future ones.',
      list: ['Root cause analysis', 'Appeal letters', 'Coding correction', 'Prevention training']
    },
    'underpayment': {
      title: 'Analytics',
      tagline: 'Find every dollar owed.',
      desc: 'We compare your contracted rates against actual payments to find variance and recover short-pays.',
      list: ['Contract variance', 'Underpayment audit', 'Recovery negotiation', 'Fee schedule review']
    }
  };

  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const key = card.getAttribute('data-service');
      const data = serviceData[key];

      const panel = document.getElementById('serviceDetailPanel');
      if (!panel) return;
      panel.classList.remove('active');

      setTimeout(() => {
        const tEl = document.getElementById('svcTitle');
        const tgEl = document.getElementById('svcTagline');
        const dEl = document.getElementById('svcDesc');
        const list = document.getElementById('svcList');

        if (tEl) tEl.textContent = data.title;
        if (tgEl) tgEl.textContent = data.tagline;
        if (dEl) dEl.textContent = data.desc;

        if (list) {
          list.innerHTML = '';
          data.list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
          });
        }

        panel.classList.add('active');

        if (window.innerWidth <= 768) {
          const headerOffset = 100;
          const elementPosition = panel.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 50);
    });
  });

  // Modal Logic
  const backdrop = document.getElementById('modalBackdrop');
  const triggers = document.querySelectorAll('.case-modal-trigger');
  const closeBtns = document.querySelectorAll('.close-modal');

  // Only set up if backdrop exists
  if (backdrop) {
    triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-case');
        const modal = document.getElementById(id);
        if (modal) {
          document.querySelectorAll('.modal').forEach(m => {
            m.style.display = 'none';
            m.classList.remove('open');
          });
          backdrop.classList.add('open');
          modal.style.display = 'block';
          setTimeout(() => modal.classList.add('open'), 10);
        }
      });
    });

    function closeModal() {
      backdrop.classList.remove('open');
      document.querySelectorAll('.modal').forEach(m => {
        m.classList.remove('open');
        setTimeout(() => m.style.display = 'none', 300);
      });
    }

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  }

  // Audit Form Logic
  const form = document.querySelector('.audit-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const action = "https://formspree.io/f/xkgelwbw";

      try {
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;

        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alert("Thank you! Your audit request has been received. We will contact you shortly.");
          form.reset();
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        }
        btn.textContent = originalText;
        btn.disabled = false;
      } catch (error) {
        alert("Oops! There was a problem submitting your form");
        console.error(error);
        const btn = form.querySelector('button');
        btn.textContent = "Request Analysis";
        btn.disabled = false;
      }
    });
  }

  // Scroll Animation Logic
  const wrapper = document.getElementById('timelineWrapper');
  if (wrapper) {
    ['click', 'touchstart', 'keydown', 'wheel', 'pointerdown', 'scroll'].forEach(evt => {
      window.addEventListener(evt, () => HapticEngine.init(), { once: true, passive: true });
    });

    let lastActiveStepIndex = -1;
    function handleScrollAnimation() {
      const fillLine = document.getElementById('scrollLine');
      const timelineSteps = document.querySelectorAll('.timeline-step');
      const flowSteps = document.querySelectorAll('.flow-step');
      const flowArrows = document.querySelectorAll('.flow-arrow');

      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.7;
      let percentage = 0;

      if (rect.top < startPoint) {
        const totalDistance = rect.height;
        const scrolledDistance = startPoint - rect.top;
        percentage = (scrolledDistance / totalDistance) * 100;
      }
      percentage = Math.max(0, Math.min(100, percentage));
      if (fillLine) fillLine.style.height = `${percentage}%`;

      const lineBottomPositionInPixels = (percentage / 100) * rect.height;
      let currentStepIndex = -1;

      timelineSteps.forEach((step, index) => {
        const stepTop = step.offsetTop;
        const offset = window.innerWidth <= 768 ? 20 : 0;
        if (lineBottomPositionInPixels >= (stepTop - offset)) {
          step.classList.add('active');
          currentStepIndex = index;
        } else {
          step.classList.remove('active');
        }
      });

      if (currentStepIndex > lastActiveStepIndex && currentStepIndex !== -1) {
        HapticEngine.trigger();
        lastActiveStepIndex = currentStepIndex;
      } else if (currentStepIndex < lastActiveStepIndex) {
        lastActiveStepIndex = currentStepIndex;
      }

      if (flowSteps.length > 0) {
        flowSteps.forEach(s => s.classList.remove('active'));
        flowArrows.forEach(a => a.classList.remove('active'));

        if (percentage > 5 && flowSteps[0]) flowSteps[0].classList.add('active');
        if (percentage > 20 && flowArrows[0]) flowArrows[0].classList.add('active');
        if (percentage > 30 && flowSteps[1]) flowSteps[1].classList.add('active');
        if (percentage > 45 && flowArrows[1]) flowArrows[1].classList.add('active');
        if (percentage > 55 && flowSteps[2]) flowSteps[2].classList.add('active');
        if (percentage > 70 && flowArrows[2]) flowArrows[2].classList.add('active');
        if (percentage > 80 && flowSteps[3]) flowSteps[3].classList.add('active');
      }
    }

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
  }
});
