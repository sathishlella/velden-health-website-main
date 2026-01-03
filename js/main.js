/* Main JavaScript for Velden Health */

// Enhanced ChatWidget with Human-like Responses
const ChatWidget = {
  isOpen: false,
  elements: {},
  FORMSPREE_URL: "https://formspree.io/f/xkgelwbw",
  state: { step: 'idle', data: {}, history: [], context: null },

  // Comprehensive Knowledge Base
  knowledge: {
    company: {
      name: "Velden Health",
      tagline: "Illinois Behavioral Health A/R Recovery Specialist",
      location: "Chicago, Illinois",
      phone: "+1 (312) 925-6457",
      email: "info@veldenhealth.com",
      founded: "2023",
      specialty: "behavioral and mental health billing recovery",
      differentiator: "We work as a 'sidecar' to your existing billing team—we don't replace them, we clear their backlog."
    },
    services: {
      ar_recovery: {
        name: "A/R Recovery",
        description: "We specialize in recovering claims that are 60-180+ days old. These are the claims most billers give up on.",
        howItWorks: "We analyze your aged A/R, identify recoverable claims, and work them through appeals… and payer calls until they're paid.",
        timeframe: "Most clients see cash hitting their accounts within 30-45 days of starting.",
        keywords: ["ar", "aged", "old claims", "recovery", "backlog", "unpaid"]
      },
      denial_management: {
        name: "Denial Management",
        description: "We don't just fix denials—we prevent them. We analyze root causes and implement fixes.",
        commonCodes: {
          "CO-197": "Precertification/authorization not obtained. We verify prior auth status before resubmitting.",
          "CO-16": "Missing or invalid information. Usually a simple data entry fix.",
          "CO-29": "Time limit for filing has expired. We negotiate with payers when there's valid cause.",
          "CO-22": "Duplicate claim. We investigate and resubmit with corrections.",
          "CO-50": "Non-covered service. We review patient benefits and appeal when appropriate."
        },
        keywords: ["denial", "denied", "reject", "appeal", "co-197", "co-16", "co-29"]
      },
      billing: {
        name: "Medical Billing",
        description: "Full-service medical billing for behavioral health practices. We handle everything from eligibility to posting.",
        includes: ["Eligibility verification", "Coding review (90834, 90837, 90791)", "Claim submission", "Payment posting", "Patient statements"],
        keywords: ["billing", "claims", "coding", "submit", "charge", "cpt"]
      },
      pilot: {
        name: "20-Claim Pilot",
        description: "Give us your 20 toughest denied claims. We work them for 60 days. You only pay if we recover cash.",
        cost: "6% of what we recover. If we recover $0, you pay $0.",
        noRisk: "No upfront cost. No monthly retainer. Pure performance.",
        keywords: ["pilot", "trial", "try", "test", "20 claims", "start"]
      },
      audit: {
        name: "Revenue Pulse Analysis",
        description: "A free, comprehensive audit of your aged A/R. We identify hidden revenue and show you exactly what's recoverable.",
        deliverable: "1-page Recovery Asset Report with denial root causes and a Cost of Inaction (COI) analysis.",
        cost: "Completely free. No obligation.",
        keywords: ["audit", "free", "analysis", "revenue pulse", "check", "review"]
      }
    },
    pricing: {
      pilot: "6% of recovered cash (performance-based)",
      fullService: "3-6% of monthly collections for full RCM",
      audit: "Free",
      noUpfront: "We never charge upfront. You pay when you get paid.",
      keywords: ["price", "pricing", "cost", "fee", "charge", "how much", "expensive", "cheap", "rate"]
    },
    faqs: [
      {
        q: ["do you replace my biller", "work with my team", "replace staff"],
        a: "No! We work alongside your existing team as a 'sidecar.' Your biller handles current claims, we handle the backlog. No disruption to your workflow."
      },
      {
        q: ["how long", "time", "timeline", "when will I see"],
        a: "Most clients see the first recovered payments within 30-45 days. The full pilot takes 60 days. We send weekly progress reports every Friday."
      },
      {
        q: ["hipaa", "secure", "security", "safe", "compliant"],
        a: "Absolutely. We're HIPAA compliant, BAA ready, and use encrypted data transfer. Your patient data is protected with enterprise-grade security."
      },
      {
        q: ["what ehr", "therapynotes", "simplepractice", "kareo", "software", "system"],
        a: "We work with all major behavioral health EHRs including TherapyNotes, SimplePractice, Kareo, Valant, and many others. We just need an aged A/R export (CSV or Excel)."
      },
      {
        q: ["illinois", "location", "where", "based"],
        a: "We're based in Chicago and specialize in Illinois payers like BCBS of Illinois, United Healthcare IL, and Aetna IL. We know the local payer quirks inside and out."
      },
      {
        q: ["minimum", "small practice", "solo", "how big"],
        a: "We work with practices of all sizes—from solo therapists to multi-location clinics. Our pilot program is designed to be accessible for smaller practices too."
      },
      {
        q: ["guarantee", "risk", "if you don't recover"],
        a: "Zero risk. Our pilot is 100% performance-based. If we don't recover anything, you don't pay a cent. Simple as that."
      },
      {
        q: ["bcbs", "blue cross", "united", "aetna", "cigna", "medicaid", "medicare"],
        a: "Yes! We work with all major payers including BCBS, United, Aetna, Cigna, and we're experienced with Medicaid/Medicare for behavioral health."
      }
    ],
    behavioral: {
      specialty: "Behavioral and mental health billing has unique challenges—prior auth requirements, medical necessity documentation, and payer-specific rules. We specialize in this niche.",
      providers: ["Therapists (LCSW, LMFT, LPC)", "Psychologists", "Psychiatrists", "Counselors", "Substance abuse clinics", "IOP/PHP programs"],
      commonIssues: ["Prior authorization denials", "Medical necessity documentation gaps", "Timely filing issues", "Coding errors on 90837 vs 90834"]
    }
  },

  // Human-like response variations
  greetings: [
    "Hey there! 👋 I'm the Velden Assistant. How can I help you today?",
    "Hi! 👋 Welcome to Velden Health. What brings you here today?",
    "Hello! I'm here to help with any questions about recovering your aged A/R. What's on your mind?",
    "Hey! 👋 Great to see you. Are you looking to recover some stuck revenue, or do you have questions about our services?"
  ],

  thinking: [
    "Good question! ",
    "Great question. ",
    "Let me explain. ",
    "Absolutely! ",
    "Happy to help with that. ",
    "That's something we get asked a lot. "
  ],

  transitions: [
    "Does that help? Let me know if you have more questions!",
    "Want me to explain anything else?",
    "Feel free to ask more—I'm here to help!",
    "Is there anything specific you'd like to dive deeper into?",
    "Does that answer your question?"
  ],

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
    this.state.history.push({ role: 'user', text: text });
    this.elements.input.value = '';
    this.showTyping();

    // Simulate human-like typing delay based on response length
    const delay = 500 + Math.random() * 700;
    setTimeout(() => {
      const response = this.processLogic(text);
      this.hideTyping();
      this.addMessage(response, 'bot');
      this.state.history.push({ role: 'bot', text: response });
    }, delay);
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
            this.addMessage("✅ **Perfect!** I've sent your info to our team. You'll hear from a recovery specialist within 24-48 hours. In the meantime, feel free to ask me anything else!", 'bot');
          }, 800);
        } else {
          this.addMessage("❌ Hmm, something went wrong on my end. Could you try again, or just email us directly at **info@veldenhealth.com**?", 'bot');
        }
      })
      .catch(() => {
        this.addMessage("❌ Looks like there's a network issue. You can reach us directly at **info@veldenhealth.com** or **(312) 925-6457**.", 'bot');
      });
  },

  // Fuzzy matching helper
  matchesIntent: function (input, keywords) {
    const lower = input.toLowerCase();
    return keywords.some(kw => lower.includes(kw.toLowerCase()));
  },

  // Get random element from array for variety
  randomFrom: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  processLogic: function (input) {
    const lower = input.toLowerCase().trim();
    const k = this.knowledge;

    // === STATE MACHINE FOR LEAD CAPTURE ===
    if (this.state.step === 'awaiting_name') {
      this.state.data.name = input;
      this.state.step = 'awaiting_email';
      return `Got it—**${input}**! And what's the best email to reach you at?`;
    }

    if (this.state.step === 'awaiting_email') {
      const email = input;
      const name = this.state.data.name || 'your practice';
      this.sendToEmail(name, email);
      this.state.step = 'idle';
      return "Sending your info securely... 🔒";
    }

    // === GREETINGS ===
    if (lower.match(/^(hi|hello|hey|good morning|good afternoon|howdy|yo|sup|what's up|hiya)/)) {
      return this.randomFrom(this.greetings);
    }

    // === THANK YOU ===
    if (lower.match(/thank|thanks|appreciate|helpful/)) {
      return this.randomFrom([
        "You're welcome! 😊 Is there anything else I can help with?",
        "Happy to help! Let me know if you have any other questions.",
        "Anytime! Feel free to ask anything else about our services."
      ]);
    }

    // === BYE ===
    if (lower.match(/^(bye|goodbye|see you|later|gotta go|leaving)/)) {
      return this.randomFrom([
        "Take care! Feel free to come back anytime. Good luck with your practice! 👋",
        "Goodbye! Remember, we're here when you need help with aged A/R. 👋",
        "See you! Don't hesitate to reach out when you're ready to recover some cash. 👋"
      ]);
    }

    // === PRICING/COST ===
    if (this.matchesIntent(input, k.pricing.keywords)) {
      return this.randomFrom(this.thinking) +
        `Our pricing is **100% performance-based**. Here's the breakdown:\n\n` +
        `• **20-Claim Pilot**: 6% of what we recover (if we recover $0, you pay $0)\n` +
        `• **Full-Service RCM**: 3-6% of monthly collections\n` +
        `• **Revenue Pulse Audit**: Completely free\n\n` +
        `The key thing? **No upfront costs, ever.** We succeed when you succeed. Want to start with the free audit?`;
    }

    // === PILOT PROGRAM ===
    if (this.matchesIntent(input, k.services.pilot.keywords)) {
      this.state.step = 'awaiting_name';
      this.state.context = 'pilot';
      return this.randomFrom(this.thinking) +
        `The **20-Claim Pilot** is our most popular option! Here's how it works:\n\n` +
        `1. You send us your **20 toughest denied claims** (60+ days old)\n` +
        `2. We work them for **60 days** using our specialized recovery process\n` +
        `3. You only pay **6% of what we actually recover**\n\n` +
        `**Zero risk.** If we don't recover anything, you pay nothing.\n\n` +
        `Ready to try it? Just tell me your **clinic name** to get started!`;
    }

    // === FREE AUDIT ===
    if (this.matchesIntent(input, k.services.audit.keywords)) {
      this.state.step = 'awaiting_name';
      this.state.context = 'audit';
      return this.randomFrom(this.thinking) +
        `Our **Revenue Pulse Analysis** is a free, no-obligation audit of your aged A/R. You'll get:\n\n` +
        `• A 1-page **Recovery Asset Report**\n` +
        `• Denial **root cause identification**\n` +
        `• A **Cost of Inaction** analysis showing what you're losing\n\n` +
        `Want me to set one up for you? Just share your **clinic name**!`;
    }

    // === DENIAL CODES ===
    if (lower.includes('co-197') || lower.includes('prior auth')) {
      return `**CO-197** is a prior authorization denial—one of the most common in behavioral health. ` +
        `The fix? We verify the original auth, check if it was entered correctly, and either resubmit with the correct auth number or submit a retrospective auth request. ` +
        `We've recovered thousands on CO-197 alone. Want us to look at yours?`;
    }
    if (lower.includes('co-16')) {
      return `**CO-16** means "missing or invalid information." Usually it's a simple fix—wrong subscriber ID, missing modifier, or date issue. ` +
        `We identify exactly what's missing and resubmit with the correction. Quick win!`;
    }
    if (lower.includes('co-29') || lower.includes('timely filing')) {
      return `**CO-29** is the timely filing denial—payers love this one. 😤 But it's not always the end! ` +
        `We can appeal if there was a valid reason for the delay (prior appeal, payer error, etc.). We've overturned plenty of these.`;
    }
    if (this.matchesIntent(input, k.services.denial_management.keywords)) {
      return this.randomFrom(this.thinking) +
        `Denial management is our bread and butter. The most common behavioral health denials we fix:\n\n` +
        `• **CO-197**: Prior auth missing → We verify and resubmit\n` +
        `• **CO-16**: Invalid info → Quick data correction\n` +
        `• **CO-29**: Timely filing → We appeal with documentation\n` +
        `• **CO-22**: Duplicate claim → Investigation and correction\n\n` +
        `Which codes are giving you trouble? I can give you specific tips!`;
    }

    // === A/R RECOVERY ===
    if (this.matchesIntent(input, k.services.ar_recovery.keywords)) {
      return this.randomFrom(this.thinking) +
        `A/R recovery is what we do best. Here's the reality: **67% of claims over 90 days are never collected** (HFMA data). ` +
        `Most billers don't have time to work old claims—they're focused on current ones.\n\n` +
        `That's where we come in. We take your 60-180+ day claims and work them until they're paid. ` +
        `No replacing your team, just clearing the backlog.\n\n` +
        `How old is your oldest unpaid claim?`;
    }

    // === BILLING/CLAIMS ===
    if (this.matchesIntent(input, k.services.billing.keywords)) {
      return this.randomFrom(this.thinking) +
        `We offer full-service behavioral health billing:\n\n` +
        `• **Eligibility & benefits verification**\n` +
        `• **Coding review** (especially 90834, 90837, 90791)\n` +
        `• **Claim submission** with 95%+ clean claim rate\n` +
        `• **Payment posting & reconciliation**\n` +
        `• **Patient statement management**\n\n` +
        `We're especially strong in behavioral health codes—the ones other billers often get wrong. What's your current billing situation?`;
    }

    // === HIPAA/SECURITY ===
    if (this.matchesIntent(input, ['hipaa', 'secure', 'security', 'safe', 'baa', 'compliant', 'privacy'])) {
      return this.randomFrom(this.thinking) +
        `Security is non-negotiable for us. Here's what we have in place:\n\n` +
        `🔒 **HIPAA Compliant** - Full compliance with all PHI requirements\n` +
        `📋 **BAA Ready** - We sign Business Associate Agreements with all clients\n` +
        `🛡️ **Encrypted Data** - All file transfers are encrypted\n\n` +
        `Your patient data stays protected. No shortcuts. Questions about our security practices?`;
    }

    // === EHR/SOFTWARE ===
    if (this.matchesIntent(input, ['therapynotes', 'simplepractice', 'kareo', 'ehr', 'software', 'system', 'valant', 'janeapp', 'drchrono'])) {
      return this.randomFrom(this.thinking) +
        `We work with all major behavioral health EHRs:\n\n` +
        `• **TherapyNotes** ✓\n` +
        `• **SimplePractice** ✓\n` +
        `• **Kareo** ✓\n` +
        `• **Valant** ✓\n` +
        `• **And many others!**\n\n` +
        `We just need an aged A/R export (CSV or Excel)—takes about 5 minutes to pull. Which system are you using?`;
    }

    // === ILLINOIS/PAYERS ===
    if (this.matchesIntent(input, ['illinois', 'bcbs', 'blue cross', 'united', 'aetna', 'chicago'])) {
      return this.randomFrom(this.thinking) +
        `We're based in **Chicago** and specialize in Illinois payers. We know the local quirks:\n\n` +
        `• **BCBS of Illinois** - Their behavioral health denials are notorious. We know their appeal process inside out.\n` +
        `• **UnitedHealthcare IL** - Specific prior auth rules we've mastered.\n` +
        `• **Aetna**, **Cigna**, Medicaid/Medicare too!\n\n` +
        `Local expertise matters. Which payers are giving you the most trouble?`;
    }

    // === HOW IT WORKS ===
    if (lower.includes('how') && (lower.includes('work') || lower.includes('process') || lower.includes('start'))) {
      return this.randomFrom(this.thinking) +
        `It's a simple 4-step process:\n\n` +
        `**1. Send the File** - Export your aged A/R (5 min)\n` +
        `**2. We Find the Claims** - We identify what's recoverable\n` +
        `**3. We Get You Paid** - Appeals, resubmissions, payer calls\n` +
        `**4. Weekly Reports** - Track progress every Friday\n\n` +
        `Your current biller keeps doing their job—we just clear the backlog. Want to try the pilot?`;
    }

    // === ABOUT/COMPANY ===
    if (this.matchesIntent(input, ['about', 'company', 'who are you', 'what do you do', 'tell me about', 'velden'])) {
      return `**Velden Health** is a revenue cycle partner based in Chicago, specializing in behavioral and mental health billing recovery.\n\n` +
        `We're the "**cleanup crew**" for Illinois clinics. Your internal team handles current claims; we recover the aged, denied, and stuck ones.\n\n` +
        `Think of us as a sidecar—we work alongside your team, not instead of them. ` +
        `Want to know more about a specific service?`;
    }

    // === CONTACT ===
    if (this.matchesIntent(input, ['contact', 'email', 'phone', 'call', 'reach', 'talk to human', 'real person', 'speak to someone'])) {
      return `Of course! Here's how to reach our team:\n\n` +
        `📧 **Email**: info@veldenhealth.com\n` +
        `📞 **Phone**: (312) 925-6457\n\n` +
        `Or I can have someone reach out to you—just share your clinic name and email!`;
    }

    // === CHECK FAQ DATABASE ===
    for (const faq of k.faqs) {
      if (faq.q.some(q => lower.includes(q))) {
        return this.randomFrom(this.thinking) + faq.a;
      }
    }

    // === YES/AFFIRMATIVE ===
    if (lower.match(/^(yes|yeah|yep|sure|ok|okay|definitely|absolutely|please|let's do it)/)) {
      if (this.state.context === 'pilot' || this.state.context === 'audit') {
        this.state.step = 'awaiting_name';
        return "Awesome! What's your **clinic name**?";
      }
      this.state.step = 'awaiting_name';
      return "Great! Let's get you started. What's your **clinic name**?";
    }

    // === NO/NEGATIVE ===
    if (lower.match(/^(no|nope|not really|maybe later|not now)/)) {
      return "No problem! I'm here whenever you're ready. Is there anything else I can help you with in the meantime?";
    }

    // === NUMBERS/STATS ===
    if (this.matchesIntent(input, ['statistic', 'data', 'numbers', 'benchmark', 'average', 'industry'])) {
      return `Here are some industry benchmarks (MGMA/HFMA data):\n\n` +
        `• **67%** of claims over 90 days are never collected\n` +
        `• **15-18%** average denial rate in Illinois behavioral health\n` +
        `• **55-65%** recovery rate with specialized A/R teams vs **12%** with internal staff\n\n` +
        `The difference? Bandwidth. Your biller is busy with current claims—they can't chase old ones. That's where we come in.`;
    }

    // === FALLBACK with suggestions ===
    return `I want to make sure I help you properly! I can assist with:\n\n` +
      `• **Pricing** - How much we charge (spoiler: it's performance-based)\n` +
      `• **Denials** - CO-197, CO-16, CO-29, and how we fix them\n` +
      `• **20-Claim Pilot** - Risk-free way to try our service\n` +
      `• **Free Audit** - See what revenue you're leaving on the table\n\n` +
      `Just type what you're curious about, or ask me anything!`;
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
