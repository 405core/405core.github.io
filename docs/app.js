const CONTACT_EMAIL = "ethancheung2088@outlook.com";
const LANGUAGE_STORAGE_KEY = "405core-language";
const METRIC_ROTATION_MS = 1800;
const NODE_PULSE_MS = 1200;
const LOG_HIGHLIGHT_MS = 950;

const siteContent = {
  zh: {
    meta: {
      title: "405core | 外包工程团队，AI 协同高密度交付",
      description:
        "405core 是一支由 4 位工程师组成的外包工程团队，通过多 agent 协同网络高密度推进品牌站、产品前台与关键页面上线。",
      lang: "zh-CN",
      locale: "zh_CN",
    },
    nav: {
      brandMeta: "高密度交付",
      services: "服务",
      ai: "AI",
      process: "流程",
      contact: "联系",
    },
    hero: {
      eyebrow: "405core / 外包工程团队",
      title: "外包就在405core!",
      summary:
        "405core 是一个轻量、密集、反应快的工程团队。4 位工程师在前台判断、拆解与验收，多 agent 在后台并行协作，把关键页面、系统能力和上线节奏一起推进到可交付状态。",
      primaryCta: "发起合作",
      secondaryCta: "查看协作方式",
      band: "4 engineers / orchestrating an agent mesh",
      panel: {
        kicker: "AI 指挥台",
        body: "工程师在前，agent 在后。复杂需求拆成可并行任务，持续推到上线。",
      },
      metrics: [
        { value: "4", values: ["4"], label: "工程师在前" },
        { value: "43", values: ["43", "41", "44", "42"], label: "协同 agents" },
        { value: "128", values: ["128", "123", "131", "126"], label: "task routes / 日" },
      ],
      marquee: [
        "agent 编排",
        "并行执行",
        "context routing",
        "代码收口",
        "快速复核",
        "ship velocity",
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
          title: "AI 协同前端交付",
          body:
            "由工程师负责判断与验收，让多 agent 并行处理页面实现、动效、测试、文案整理与交付收尾。",
          tags: ["Agent Mesh", "Parallel Execution", "Review Loop"],
        },
        {
          index: "03",
          title: "业务后台与工具化界面",
          body:
            "把杂乱流程整理成可操作页面，适合运营后台、内部工具、数据面板和管理端。",
          tags: ["Dashboard", "Admin", "Internal Tool"],
        },
        {
          index: "04",
          title: "从 0 到 1 的前端落地",
          body:
            "把需求、信息架构、组件和上线链路压成能持续迭代的前端工程，不把烂尾留给下一轮。",
          tags: ["Static Site", "Front-end Build", "Integration"],
        },
        {
          index: "05",
          title: "短周期技术协作",
          body:
            "适合产品赶工、展示节点、Demo、交付补位和需要快速补强的关键阶段。",
          tags: ["Sprint Support", "Prototype", "Delivery"],
        },
      ],
    },
    ai: {
      eyebrow: "AI 协同层",
      title: "四位工程师在前台判断，一张 agent mesh 在后台并发执行。",
      intro:
        "我们把工程师判断力、agent 执行密度和页面上线节奏压在同一条交付链里。页面、前端、素材整理、测试与收尾可以同时推进。",
      command: "mesh.orchestrate --crew 4 --agents 43 --mode ship",
      metrics: [
        {
          value: "43",
          values: ["43", "41", "44", "42"],
          label: "在线 agents",
          detail: "围绕 UI、QA、文案、动效与收尾任务轮转",
        },
        {
          value: "128",
          values: ["128", "123", "131", "126"],
          label: "task routes / 日",
          detail: "拆分、回收、复核在一张任务网里持续推进",
        },
        {
          value: "9",
          values: ["9", "10", "8", "11"],
          label: "活跃上下文池",
          detail: "上下文被压缩后复用给不同 worker 链路",
        },
        {
          value: "6m",
          values: ["6m", "7m", "5m", "6m"],
          label: "平均 handoff",
          detail: "从工程师判断到 agent 接棒的平均间隔",
        },
      ],
      nodes: [
        { id: "eng-01", role: "engineer", label: "eng-01", x: 18, y: 22, status: "command" },
        { id: "eng-02", role: "engineer", label: "eng-02", x: 42, y: 16, status: "command" },
        { id: "eng-03", role: "engineer", label: "eng-03", x: 70, y: 24, status: "command" },
        { id: "eng-04", role: "engineer", label: "eng-04", x: 56, y: 55, status: "command" },
        { id: "ui-07", role: "agent", label: "ui-07", x: 8, y: 9, lead: "eng-01", status: "ready" },
        { id: "copy-02", role: "agent", label: "copy-02", x: 26, y: 8, lead: "eng-01", status: "steady", dense: true },
        { id: "qa-04", role: "agent", label: "qa-04", x: 11, y: 39, lead: "eng-01", status: "busy" },
        { id: "motion-03", role: "agent", label: "motion-03", x: 33, y: 34, lead: "eng-02", status: "busy" },
        { id: "research-06", role: "agent", label: "research-06", x: 51, y: 7, lead: "eng-02", status: "steady", dense: true },
        { id: "synth-08", role: "agent", label: "synth-08", x: 60, y: 12, lead: "eng-02", status: "ready" },
        { id: "infra-02", role: "agent", label: "infra-02", x: 84, y: 12, lead: "eng-03", status: "ready" },
        { id: "route-09", role: "agent", label: "route-09", x: 88, y: 34, lead: "eng-03", status: "busy" },
        { id: "review-05", role: "agent", label: "review-05", x: 72, y: 43, lead: "eng-03", status: "steady" },
        { id: "ops-03", role: "agent", label: "ops-03", x: 41, y: 66, lead: "eng-04", status: "busy" },
        { id: "patch-11", role: "agent", label: "patch-11", x: 58, y: 81, lead: "eng-04", status: "ready" },
        { id: "handoff-12", role: "agent", label: "handoff-12", x: 80, y: 67, lead: "eng-04", status: "steady", dense: true },
      ],
      logs: [
        { tag: "BOOT", text: "spawn agent.cluster/ui --count 12 --priority high" },
        { tag: "ROUTE", text: "route 首页英雄区 -> ui-07, motion-03, copy-02" },
        { tag: "CODE", text: "append styles.ai-mesh.css + hero.signal.js + locale.map" },
        { tag: "TEST", text: "run 锚点 / 语言切换 / 移动端 viewport 检查" },
        { tag: "MERGE", text: "compress context -> handoff engineer-03 做最终判断" },
        { tag: "SHIP", text: "prepare docs/ 发布包 -> GitHub Pages" },
      ],
      footerNote:
        "这些数值是演示型 orchestration view，用来表达我们的协同方式，不是对外 SLA 承诺。",
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
      title: "405core | AI-orchestrated high-density delivery",
      description:
        "405core is a four-engineer outsourced team that uses a multi-agent mesh to push brand fronts, product surfaces, and critical pages to launch with high delivery density.",
      lang: "en",
      locale: "en_US",
    },
    nav: {
      brandMeta: "high-density delivery",
      services: "services",
      ai: "AI",
      process: "process",
      contact: "contact",
    },
    hero: {
      eyebrow: "405core / outsourced engineering team",
      title: "Outsourcing starts at 405core!",
      summary:
        "405core is a lean, dense, fast-response engineering team. Four engineers own judgement, decomposition, and review while a multi-agent mesh runs parallel execution behind them to move key pages, product capability, and launch rhythm together.",
      primaryCta: "start a brief",
      secondaryCta: "see the workflow",
      band: "4 engineers / orchestrating an agent mesh",
      panel: {
        kicker: "AI command layer",
        body: "Engineers stay up front. Agents stay in motion. Complex briefs get split into parallel work and pushed all the way to launch.",
      },
      metrics: [
        { value: "4", values: ["4"], label: "engineers in command" },
        { value: "43", values: ["43", "41", "44", "42"], label: "active agents" },
        { value: "128", values: ["128", "123", "131", "126"], label: "task routes / day" },
      ],
      marquee: [
        "agent orchestration",
        "parallel execution",
        "context routing",
        "code closure",
        "tight review loops",
        "ship velocity",
      ],
    },
    services: {
      eyebrow: "what we do",
      title: "We turn outsourced work into a high-density delivery crew.",
      intro:
        "Built for teams that need speed, judgement, and engineering follow-through. Not for projects that only want to pile up billable hours.",
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
          title: "AI-assisted front-end delivery",
          body:
            "Engineers hold the line on judgement and acceptance while agents parallelize implementation, motion, QA, content cleanup, and delivery finishing work.",
          tags: ["Agent Mesh", "Parallel Execution", "Review Loop"],
        },
        {
          index: "03",
          title: "Operational dashboards and internal tools",
          body:
            "We turn scattered workflow into usable interfaces for admin panels, internal systems, metrics surfaces, and management views.",
          tags: ["Dashboard", "Admin", "Internal Tool"],
        },
        {
          index: "04",
          title: "Zero-to-one front-end delivery",
          body:
            "We compress requirements, information architecture, components, and launch mechanics into a front-end system that can keep moving.",
          tags: ["Static Site", "Front-end Build", "Integration"],
        },
        {
          index: "05",
          title: "Short-cycle technical reinforcement",
          body:
            "Useful for launch sprints, showcase deadlines, demos, delivery backups, and any phase that needs fast engineering weight.",
          tags: ["Sprint Support", "Prototype", "Delivery"],
        },
      ],
    },
    ai: {
      eyebrow: "AI layer",
      title: "Four engineers make the calls up front while an agent mesh executes behind them.",
      intro:
        "We stack engineering judgement, agent execution density, and launch rhythm inside one delivery loop. Pages, front-end implementation, asset cleanup, QA, and finishing passes can move at the same time.",
      command: "mesh.orchestrate --crew 4 --agents 43 --mode ship",
      metrics: [
        {
          value: "43",
          values: ["43", "41", "44", "42"],
          label: "agents online",
          detail: "Rotating across UI, QA, copy, motion, and finishing lanes",
        },
        {
          value: "128",
          values: ["128", "123", "131", "126"],
          label: "task routes / day",
          detail: "Split, recover, and review cycles keep moving inside one mesh",
        },
        {
          value: "9",
          values: ["9", "10", "8", "11"],
          label: "active context pools",
          detail: "Compressed context is reused across different worker chains",
        },
        {
          value: "6m",
          values: ["6m", "7m", "5m", "6m"],
          label: "average handoff",
          detail: "Mean time from engineer decision to agent takeover",
        },
      ],
      nodes: [
        { id: "eng-01", role: "engineer", label: "eng-01", x: 18, y: 22, status: "command" },
        { id: "eng-02", role: "engineer", label: "eng-02", x: 42, y: 16, status: "command" },
        { id: "eng-03", role: "engineer", label: "eng-03", x: 70, y: 24, status: "command" },
        { id: "eng-04", role: "engineer", label: "eng-04", x: 56, y: 55, status: "command" },
        { id: "ui-07", role: "agent", label: "ui-07", x: 8, y: 9, lead: "eng-01", status: "ready" },
        { id: "copy-02", role: "agent", label: "copy-02", x: 26, y: 8, lead: "eng-01", status: "steady", dense: true },
        { id: "qa-04", role: "agent", label: "qa-04", x: 11, y: 39, lead: "eng-01", status: "busy" },
        { id: "motion-03", role: "agent", label: "motion-03", x: 33, y: 34, lead: "eng-02", status: "busy" },
        { id: "research-06", role: "agent", label: "research-06", x: 51, y: 7, lead: "eng-02", status: "steady", dense: true },
        { id: "synth-08", role: "agent", label: "synth-08", x: 60, y: 12, lead: "eng-02", status: "ready" },
        { id: "infra-02", role: "agent", label: "infra-02", x: 84, y: 12, lead: "eng-03", status: "ready" },
        { id: "route-09", role: "agent", label: "route-09", x: 88, y: 34, lead: "eng-03", status: "busy" },
        { id: "review-05", role: "agent", label: "review-05", x: 72, y: 43, lead: "eng-03", status: "steady" },
        { id: "ops-03", role: "agent", label: "ops-03", x: 41, y: 66, lead: "eng-04", status: "busy" },
        { id: "patch-11", role: "agent", label: "patch-11", x: 58, y: 81, lead: "eng-04", status: "ready" },
        { id: "handoff-12", role: "agent", label: "handoff-12", x: 80, y: 67, lead: "eng-04", status: "steady", dense: true },
      ],
      logs: [
        { tag: "BOOT", text: "spawn agent.cluster/ui --count 12 --priority high" },
        { tag: "ROUTE", text: "route /landing/hero -> ui-07, motion-03, copy-02" },
        { tag: "CODE", text: "append styles.ai-mesh.css + hero.signal.js + locale.map" },
        { tag: "TEST", text: "run anchor links / locale switch / mobile viewport checks" },
        { tag: "MERGE", text: "compress context -> handoff engineer-03 for final judgement" },
        { tag: "SHIP", text: "prepare docs/ publish bundle for GitHub Pages" },
      ],
      footerNote:
        "These values are part of a demo orchestration view. They describe how we coordinate work, not a public SLA commitment.",
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
  aiMetrics: document.querySelector("[data-ai-metrics]"),
  aiMesh: document.querySelector("[data-ai-mesh]"),
  aiLogs: document.querySelector("[data-ai-logs]"),
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
let metricRotationTimer = 0;
let nodePulseTimer = 0;
let logHighlightTimer = 0;

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

function getMetricRotations(metric) {
  if (Array.isArray(metric.values) && metric.values.length > 0) {
    return metric.values;
  }

  return [metric.value];
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
  if (!elements.heroMetrics) {
    return;
  }

  elements.heroMetrics.innerHTML = metrics
    .map((metric) => {
      const rotations = getMetricRotations(metric);

      return `
        <li class="hero-metric-item" data-reveal>
          <span
            class="metric-value"
            data-rotations="${rotations.join("|")}"
            data-rotation-index="0"
          >${rotations[0]}</span>
          <span class="metric-label">${metric.label}</span>
        </li>
      `;
    })
    .join("");
}

function renderHeroMarquee(items) {
  if (!elements.heroMarquee) {
    return;
  }

  const track = [...items, ...items]
    .map((item) => `<span class="marquee-item">${item}</span>`)
    .join("");

  elements.heroMarquee.innerHTML = `<div class="marquee-track">${track}</div>`;
}

function renderServices(items) {
  if (!elements.servicesList) {
    return;
  }

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

function renderAiMetrics(metrics) {
  if (!elements.aiMetrics) {
    return;
  }

  elements.aiMetrics.innerHTML = metrics
    .map((metric) => {
      const rotations = getMetricRotations(metric);

      return `
        <li class="ai-metric-item">
          <span
            class="ai-metric-value"
            data-rotations="${rotations.join("|")}"
            data-rotation-index="0"
          >${rotations[0]}</span>
          <div class="ai-metric-copy">
            <p class="ai-metric-label">${metric.label}</p>
            <p class="ai-metric-detail">${metric.detail}</p>
          </div>
        </li>
      `;
    })
    .join("");
}

function buildMeshLinks(nodes) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const engineers = nodes.filter((node) => node.role === "engineer");
  const links = [];

  engineers.forEach((node, index) => {
    const next = engineers[(index + 1) % engineers.length];

    if (next) {
      links.push({
        from: node,
        to: next,
        core: true,
      });
    }
  });

  nodes
    .filter((node) => node.role === "agent" && node.lead && nodeMap.has(node.lead))
    .forEach((node) => {
      links.push({
        from: nodeMap.get(node.lead),
        to: node,
        core: false,
        dense: Boolean(node.dense),
      });
    });

  return links;
}

function renderAiMesh(nodes) {
  if (!elements.aiMesh) {
    return;
  }

  const links = buildMeshLinks(nodes);

  elements.aiMesh.innerHTML = `
    <svg class="ai-mesh-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      ${links
        .map(
          (link, index) => `
            <line
              class="ai-link ${link.core ? "ai-link--core" : ""} ${link.dense ? "is-dense" : ""}"
              data-link-target="${link.to.id}"
              x1="${link.from.x}"
              y1="${link.from.y}"
              x2="${link.to.x}"
              y2="${link.to.y}"
              style="--line-delay: ${index * 0.16}s"
            ></line>
          `,
        )
        .join("")}
    </svg>

    <div class="ai-node-layer">
      ${nodes
        .map(
          (node, index) => `
            <div
              class="ai-node ai-node--${node.role} is-${node.status || "steady"} ${node.dense ? "is-dense" : ""}"
              data-node-id="${node.id}"
              ${node.lead ? `data-lead-id="${node.lead}"` : ""}
              style="--x: ${node.x}; --y: ${node.y}; --pulse-delay: ${index * 0.14}s"
            >
              <span class="ai-node-core"></span>
              <span class="ai-node-label">${node.label}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAiLogs(logs) {
  if (!elements.aiLogs) {
    return;
  }

  elements.aiLogs.innerHTML = logs
    .map(
      (log, index) => `
        <div class="ai-terminal-line" data-terminal-line style="--line-delay: ${index * 120}ms">
          <span class="ai-terminal-tag">${log.tag}</span>
          <span class="ai-terminal-text">${log.text}</span>
        </div>
      `,
    )
    .join("");
}

function renderProcess(steps) {
  if (!elements.processList) {
    return;
  }

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

function clearNodeState() {
  document.querySelectorAll(".ai-node, .ai-link").forEach((node) => {
    node.classList.remove("is-live");
  });
}

function stopDynamicEffects() {
  window.clearInterval(metricRotationTimer);
  window.clearInterval(nodePulseTimer);
  window.clearInterval(logHighlightTimer);
  metricRotationTimer = 0;
  nodePulseTimer = 0;
  logHighlightTimer = 0;
  clearNodeState();
}

function rotateMetricValues() {
  document.querySelectorAll("[data-rotations]").forEach((node, index) => {
    const rotations = node.dataset.rotations.split("|");

    if (rotations.length <= 1) {
      return;
    }

    const nextIndex = (Number(node.dataset.rotationIndex || 0) + 1 + index) % rotations.length;
    node.dataset.rotationIndex = String(nextIndex);
    node.textContent = rotations[nextIndex];
    node.classList.remove("is-flash");
    void node.offsetWidth;
    node.classList.add("is-flash");
  });

  const heroMetricItems = [...document.querySelectorAll(".hero-metric-item")];
  const aiMetricItems = [...document.querySelectorAll(".ai-metric-item")];

  heroMetricItems.forEach((item, index) => {
    item.classList.toggle("is-live", index === Number(item.dataset.liveIndex || 0));
  });

  aiMetricItems.forEach((item, index) => {
    item.classList.toggle("is-live", index === Number(item.dataset.liveIndex || 0));
  });

  if (heroMetricItems.length > 0) {
    const nextHero = (Number(heroMetricItems[0].dataset.liveIndex || 0) + 1) % heroMetricItems.length;
    heroMetricItems.forEach((item) => {
      item.dataset.liveIndex = String(nextHero);
    });
  }

  if (aiMetricItems.length > 0) {
    const nextAi = (Number(aiMetricItems[0].dataset.liveIndex || 0) + 1) % aiMetricItems.length;
    aiMetricItems.forEach((item) => {
      item.dataset.liveIndex = String(nextAi);
    });
  }
}

function pulseMeshNodes() {
  clearNodeState();

  const agentNodes = [...document.querySelectorAll(".ai-node--agent")].filter((node) => {
    return window.innerWidth > 720 || !node.classList.contains("is-dense");
  });

  if (agentNodes.length === 0) {
    return;
  }

  const engineerNodes = [...document.querySelectorAll(".ai-node--engineer")];
  const desiredCount = window.innerWidth <= 640 ? 2 : 4;
  const selected = [];
  const pool = [...agentNodes];

  while (pool.length > 0 && selected.length < Math.min(desiredCount, agentNodes.length)) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    selected.push(pool.splice(randomIndex, 1)[0]);
  }

  selected.forEach((node) => {
    node.classList.add("is-live");

    const nodeId = node.dataset.nodeId;
    const leadId = node.dataset.leadId;

    document
      .querySelector(`[data-link-target="${nodeId}"]`)
      ?.classList.add("is-live");

    document
      .querySelector(`[data-node-id="${leadId}"]`)
      ?.classList.add("is-live");
  });

  engineerNodes.forEach((node) => {
    if (selected.some((agent) => agent.dataset.leadId === node.dataset.nodeId)) {
      node.classList.add("is-live");
    }
  });
}

function highlightLogs() {
  const lines = [...document.querySelectorAll("[data-terminal-line]")];

  if (lines.length === 0) {
    return;
  }

  const currentIndex = (Number(lines[0].dataset.activeIndex || 0) + 1) % lines.length;

  lines.forEach((line, index) => {
    line.dataset.activeIndex = String(currentIndex);
    line.classList.toggle("is-active", index === currentIndex || index === (currentIndex + lines.length - 1) % lines.length);
  });
}

function startDynamicEffects() {
  stopDynamicEffects();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-terminal-line]").forEach((line, index) => {
      line.classList.toggle("is-active", index < 2);
    });
    return;
  }

  rotateMetricValues();
  pulseMeshNodes();
  highlightLogs();

  metricRotationTimer = window.setInterval(rotateMetricValues, METRIC_ROTATION_MS);
  nodePulseTimer = window.setInterval(pulseMeshNodes, NODE_PULSE_MS);
  logHighlightTimer = window.setInterval(highlightLogs, LOG_HIGHLIGHT_MS);
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
  renderAiMetrics(content.ai.metrics);
  renderAiMesh(content.ai.nodes);
  renderAiLogs(content.ai.logs);
  renderProcess(content.process.steps);
  updateMeta(content);
  updateEmailLinks();
  updateLanguageToggles();
  bindRevealTargets();
  updateHeaderState();
  updateProcessProgress();
  startDynamicEffects();

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
  window.addEventListener("beforeunload", stopDynamicEffects);
}

bootstrap();
