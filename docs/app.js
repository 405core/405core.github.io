const CONTACT_EMAIL = "ethancheung2088@outlook.com";
const LANGUAGE_STORAGE_KEY = "405core-language";

const siteContent = {
  zh: {
    meta: {
      title: "405core | 四位工程师，高密度交付",
      description:
        "405core 是一支由 4 位工程师组成的高密度交付团队，擅长把模糊需求压成可上线的品牌站、前端产品与关键页面。",
      lang: "zh-CN",
      locale: "zh_CN",
    },
    nav: {
      brandMeta: "高密度交付",
      services: "服务",
      process: "流程",
      contact: "联系",
    },
    hero: {
      eyebrow: "405core / 外包工程团队",
      title: "外包就在405core!",
      summary:
        "405core 是一个轻量、密集、反应快的工程团队。我们擅长把模糊需求压成可执行范围，把关键页面、系统能力和上线节奏一起推进到可交付状态。",
      primaryCta: "发起合作",
      secondaryCta: "查看协作方式",
      band: "4 engineers / high-density delivery",
      panel: {
        kicker: "工作方式",
        body: "不靠堆人，不靠流程表演。直接拆问题、拉齐边界、推进上线。",
      },
      metrics: [
        { value: "4", label: "工程师" },
        { value: "24h", label: "默认首轮响应" },
        { value: "0→1", label: "从需求到上线" },
      ],
      marquee: [
        "高标准",
        "高响应",
        "边界清楚",
        "沟通直接",
        "交付密度",
        "从零搭起",
      ],
    },
    services: {
      eyebrow: "能做什么",
      title: "把外包做成一支高密度交付队伍。",
      intro:
        "适合需要速度、判断和工程落地的人，不适合只想堆工时的项目。",
      items: [
        {
          index: "01",
          title: "品牌站与产品官网",
          body:
            "从叙事、界面到静态部署，一次性搭好能见客户、能挂 GitHub Pages 的前台站点。",
          tags: ["门户网站", "Landing Page", "多语言"],
        },
        {
          index: "02",
          title: "业务后台与工具化界面",
          body:
            "把杂乱流程整理成可操作页面，适合运营后台、内部工具、数据面板和管理端。",
          tags: ["Dashboard", "Admin", "Internal Tool"],
        },
        {
          index: "03",
          title: "从 0 到 1 的前端落地",
          body:
            "把需求、信息架构、组件和上线链路压成能持续迭代的前端工程，不把烂尾留给下一轮。",
          tags: ["Static Site", "Front-end Build", "Integration"],
        },
        {
          index: "04",
          title: "短周期技术协作",
          body:
            "适合产品赶工、展示节点、Demo、交付补位和需要快速补强的关键阶段。",
          tags: ["Sprint Support", "Prototype", "Delivery"],
        },
      ],
    },
    process: {
      eyebrow: "怎么合作",
      title: "沟通短，推进快，边界清楚。",
      intro: "我们用最少的往返，换取可预期的交付密度。",
      steps: [
        {
          number: "01",
          title: "对齐问题",
          body: "先把目标、限制和真实优先级讲清楚，模糊点当场压实。",
          detail: "输出范围、节奏和风险判断。",
        },
        {
          number: "02",
          title: "快速成型",
          body: "先上关键骨架和首版视觉或功能，不等全量设计再开工。",
          detail: "尽快给出能讨论、能判断的东西。",
        },
        {
          number: "03",
          title: "连续收敛",
          body: "围绕反馈做短周期调整，保留判断，不做无边界返工。",
          detail: "每一轮都更接近真实上线形态。",
        },
        {
          number: "04",
          title: "交付上线",
          body: "补齐部署、细节和收尾，让页面或功能可以被真正使用。",
          detail: "能跑、能讲、能交接。",
        },
      ],
    },
    contact: {
      eyebrow: "联系 405core",
      title: "如果你需要一支能把事情直接推进的人。",
      body:
        "发一个简短需求给我们。项目阶段、预期时间、已有素材都可以直接写。",
      primaryCta: "发送邮件",
      response: "默认以邮件作为合作入口，通常会在 24 小时内给出首轮反馈。",
    },
    footer: {
      tagline: "405core 是一支为高密度交付而生的外包工程团队。",
      note: "一切尽在405core。",
    },
  },
  en: {
    meta: {
      title: "405core | 4 engineers, high-density delivery",
      description:
        "405core is a four-engineer high-density delivery team built to turn fuzzy briefs into shippable brand sites, front-end products, and key interfaces.",
      lang: "en",
      locale: "en_US",
    },
    nav: {
      brandMeta: "high-density delivery",
      services: "services",
      process: "process",
      contact: "contact",
    },
    hero: {
      eyebrow: "405core / outsourced engineering team",
      title: "Outsourcing starts at 405core!",
      summary:
        "405core is a lean, dense, fast-response engineering team. We compress fuzzy requests into workable scope, then push key pages, product capability, and launch rhythm together until the work is ready to ship.",
      primaryCta: "start a brief",
      secondaryCta: "see the workflow",
      band: "4 engineers / high-density delivery",
      panel: {
        kicker: "operating posture",
        body: "No headcount theater. No process theater. We break the problem down, lock the boundary, and move the work to launch.",
      },
      metrics: [
        { value: "4", label: "engineers" },
        { value: "24h", label: "default first response" },
        { value: "0→1", label: "from brief to launch" },
      ],
      marquee: [
        "high standards",
        "fast response",
        "clear boundaries",
        "direct communication",
        "delivery density",
        "from zero to ship",
      ],
    },
    services: {
      eyebrow: "what we do",
      title: "We turn outsourced work into a high-density delivery crew.",
      intro:
        "Built for teams that need speed, judgment, and engineering follow-through. Not for projects that only want to pile up billable hours.",
      items: [
        {
          index: "01",
          title: "Brand sites and product-facing front doors",
          body:
            "Narrative, interface, and static deployment packaged into one visible site that can go live fast, including GitHub Pages delivery.",
          tags: ["Portal Site", "Landing Page", "Bilingual"],
        },
        {
          index: "02",
          title: "Operational dashboards and internal tools",
          body:
            "We turn scattered workflow into usable interfaces for admin panels, internal systems, metrics surfaces, and management views.",
          tags: ["Dashboard", "Admin", "Internal Tool"],
        },
        {
          index: "03",
          title: "Zero-to-one front-end delivery",
          body:
            "We compress requirements, information architecture, components, and launch mechanics into a front-end system that can keep moving.",
          tags: ["Static Site", "Front-end Build", "Integration"],
        },
        {
          index: "04",
          title: "Short-cycle technical reinforcement",
          body:
            "Useful for launch sprints, showcase deadlines, demos, delivery backups, and any phase that needs fast engineering weight.",
          tags: ["Sprint Support", "Prototype", "Delivery"],
        },
      ],
    },
    process: {
      eyebrow: "how we work",
      title: "Short loops. Fast movement. Clear boundaries.",
      intro: "We trade fewer back-and-forth rounds for a more predictable delivery pace.",
      steps: [
        {
          number: "01",
          title: "Align the real problem",
          body:
            "We clarify the goal, the constraints, and the true priority first, then pin down what is still fuzzy.",
          detail: "Outcome: working scope, pace, and risk view.",
        },
        {
          number: "02",
          title: "Shape the first version fast",
          body:
            "We move on the key structure and the first visual or functional cut early instead of waiting for a perfect spec.",
          detail: "Outcome: something concrete to review quickly.",
        },
        {
          number: "03",
          title: "Tighten through short cycles",
          body:
            "We refine against feedback without turning the project into unbounded rework.",
          detail: "Outcome: every pass gets closer to launch reality.",
        },
        {
          number: "04",
          title: "Ship the thing",
          body:
            "We finish deployment, details, and handoff so the page or feature can actually be used.",
          detail: "Outcome: live, explainable, and transferable work.",
        },
      ],
    },
    contact: {
      eyebrow: "contact 405core",
      title: "If you need a team that can push the work forward directly.",
      body:
        "Send us a short brief. Project stage, timeline, and whatever material already exists are enough to start.",
      primaryCta: "write to us",
      response: "Email is the default intake path, and we usually send a first response within 24 hours.",
    },
    footer: {
      tagline: "405core is an outsourced engineering team built for high-density delivery.",
      note: "Everything you need is in 405core.",
    },
  },
};

const elements = {
  metaDescription: document.querySelector("#meta-description"),
  metaOgTitle: document.querySelector("#meta-og-title"),
  metaOgDescription: document.querySelector("#meta-og-description"),
  metaOgLocale: document.querySelector("#meta-og-locale"),
  metaTwitterTitle: document.querySelector("#meta-twitter-title"),
  metaTwitterDescription: document.querySelector("#meta-twitter-description"),
  servicesList: document.querySelector("[data-services-list]"),
  processList: document.querySelector("[data-process-list]"),
  heroMetrics: document.querySelector("[data-hero-metrics]"),
  heroMarquee: document.querySelector("[data-hero-marquee]"),
  emailLinks: [...document.querySelectorAll("[data-email-link]")],
  emailTextNodes: [...document.querySelectorAll("[data-email-text]")],
  langToggles: [...document.querySelectorAll("[data-lang-toggle]")],
  currentYear: document.querySelector("[data-current-year]"),
  processSection: document.querySelector("#process"),
  sectionNodes: [...document.querySelectorAll("[data-section]")],
  navLinks: [...document.querySelectorAll("[data-nav-target]")],
  header: document.querySelector(".site-header"),
};

let currentLanguage = getInitialLanguage();
let revealObserver;
let sectionObserver;
let isTicking = false;
let switchTimer = 0;

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (stored && siteContent[stored]) {
      return stored;
    }
  } catch {
    // Ignore storage failures and fall back to browser language.
  }

  const browserLanguage = (navigator.language || "zh").toLowerCase();

  return browserLanguage.startsWith("zh") ? "zh" : "en";
}

function getValueByPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value == null) {
      return undefined;
    }

    if (/^\d+$/.test(key)) {
      return value[Number(key)];
    }

    return value[key];
  }, source);
}

function updateStaticText(content) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getValueByPath(content, node.dataset.i18n);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });
}

function renderHeroMetrics(metrics) {
  elements.heroMetrics.innerHTML = metrics
    .map(
      (metric) => `
        <li data-reveal>
          <span class="metric-value">${metric.value}</span>
          <span class="metric-label">${metric.label}</span>
        </li>
      `,
    )
    .join("");
}

function renderHeroMarquee(items) {
  const track = [...items, ...items]
    .map((item) => `<span class="marquee-item">${item}</span>`)
    .join("");

  elements.heroMarquee.innerHTML = `<div class="marquee-track">${track}</div>`;
}

function renderServices(items) {
  elements.servicesList.innerHTML = items
    .map(
      (item) => `
        <article class="service-item" data-reveal>
          <div class="service-index">${item.index}</div>
          <div class="service-body">
            <h3 class="service-title">${item.title}</h3>
            <p class="service-copy">${item.body}</p>
            <ul class="service-tags">
              ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProcess(steps) {
  elements.processList.innerHTML = steps
    .map(
      (step) => `
        <li class="process-step" data-reveal>
          <span class="process-number">${step.number}</span>
          <h3 class="process-title">${step.title}</h3>
          <p class="process-copy">${step.body}</p>
          <p class="process-detail">${step.detail}</p>
        </li>
      `,
    )
    .join("");
}

function updateMeta(content) {
  document.documentElement.lang = content.meta.lang;
  document.title = content.meta.title;
  elements.metaDescription?.setAttribute("content", content.meta.description);
  elements.metaOgTitle?.setAttribute("content", content.meta.title);
  elements.metaOgDescription?.setAttribute("content", content.meta.description);
  elements.metaOgLocale?.setAttribute("content", content.meta.locale);
  elements.metaTwitterTitle?.setAttribute("content", content.meta.title);
  elements.metaTwitterDescription?.setAttribute("content", content.meta.description);
}

function updateEmailLinks() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  elements.emailLinks.forEach((link) => {
    link.setAttribute("href", mailto);
  });

  elements.emailTextNodes.forEach((node) => {
    node.textContent = CONTACT_EMAIL;
  });
}

function updateLanguageToggles() {
  const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
  const label = nextLanguage === "zh" ? "中文" : "EN";
  const ariaLabel = nextLanguage === "zh" ? "切换到中文" : "Switch to English";

  elements.langToggles.forEach((button) => {
    button.textContent = label;
    button.dataset.nextLanguage = nextLanguage;
    button.setAttribute("aria-label", ariaLabel);
    button.setAttribute("title", ariaLabel);
  });
}

function bindLanguageToggles() {
  elements.langToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.nextLanguage;

      if (nextLanguage && nextLanguage !== currentLanguage) {
        setLanguage(nextLanguage);
      }
    });
  });
}

function bindRevealTargets() {
  const targets = [...document.querySelectorAll("[data-reveal]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealObserver) {
    revealObserver.disconnect();
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  targets.forEach((target) => revealObserver.observe(target));
}

function updateHeaderState() {
  elements.header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

function updateProcessProgress() {
  if (!elements.processSection) {
    return;
  }

  const rect = elements.processSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const progress = clamp((viewportHeight - rect.top) / (rect.height + viewportHeight * 0.25), 0, 1);

  elements.processSection.style.setProperty("--process-progress", progress.toFixed(3));
}

function setupSectionObserver() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!activeEntry) {
        return;
      }

      const activeSection = activeEntry.target.id;

      elements.navLinks.forEach((link) => {
        const isActive = link.dataset.navTarget === activeSection;
        link.classList.toggle("is-active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-30% 0px -45% 0px",
    },
  );

  elements.sectionNodes
    .filter((section) => section.id)
    .forEach((section) => sectionObserver.observe(section));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function onScroll() {
  if (isTicking) {
    return;
  }

  isTicking = true;
  window.requestAnimationFrame(() => {
    updateHeaderState();
    updateProcessProgress();
    isTicking = false;
  });
}

function setLanguage(language, { persist = true } = {}) {
  if (!siteContent[language]) {
    return;
  }

  currentLanguage = language;
  const content = siteContent[language];

  document.body.classList.add("is-switching");
  window.clearTimeout(switchTimer);

  updateStaticText(content);
  renderHeroMetrics(content.hero.metrics);
  renderHeroMarquee(content.hero.marquee);
  renderServices(content.services.items);
  renderProcess(content.process.steps);
  updateMeta(content);
  updateEmailLinks();
  updateLanguageToggles();
  bindRevealTargets();
  updateHeaderState();
  updateProcessProgress();

  switchTimer = window.setTimeout(() => {
    document.body.classList.remove("is-switching");
  }, 220);

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures and continue.
    }
  }
}

function bootstrap() {
  bindLanguageToggles();
  setupSectionObserver();
  updateEmailLinks();
  updateHeaderState();
  setLanguage(currentLanguage, { persist: false });

  if (elements.currentYear) {
    elements.currentYear.textContent = String(new Date().getFullYear());
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

bootstrap();
