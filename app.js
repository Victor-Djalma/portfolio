(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const translations = window.TRANSLATIONS;
  const dialog = document.getElementById('project-dialog');
  const closeButton = document.getElementById('close-dialog');
  const imageDialog = document.getElementById('image-dialog');
  const imageView = document.getElementById('image-view');
  const closeImageButton = document.getElementById('close-image');
  const imageSizeButton = document.getElementById('image-size');
  let imageOpener = null;
  let activeImage = null;
  let language = 'pt';
  let activeProject = null;
  let opener = null;
  try { if (localStorage.getItem('portfolio-language') === 'en') language = 'en'; } catch { /* Storage may be unavailable. */ }
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${escapeHTML(name)}"/></svg>`;
  const t = key => translations[language][key];
  const tags = values => `<ul class="tags" aria-label="${t('technologies')}">${values.map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul>`;
  const safeURL = value => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? escapeHTML(url.href) : null; } catch { return null; }
  };
  const externalLink = (url, label) => { const href = safeURL(url); return href ? `<a class="text-link" href="${href}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}${icon('external')}</a>` : ''; };
  const projectLinks = project => ['repository', 'documentation'].filter(key => safeURL(project.links[key]));
  const mediaFigure = item => `<figure><button class="image-trigger" type="button" data-image="${escapeHTML(item.src)}" data-image-alt="${escapeHTML(item[language])}" aria-haspopup="dialog" aria-label="${t('enlarge')}: ${escapeHTML(item[language])}"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item[language])}" loading="lazy"></button></figure>`;
  function graphic(project) {
    return `<div class="graphic-cover ${project.theme}" aria-hidden="true"><div class="graphic-grid"></div><div class="diagram"><span class="diagram-node">${icon(project.icon)}</span><span class="diagram-line"></span><span class="diagram-center">${project.id === 'fortigate' ? 'IPsec' : 'AWS'}</span><span class="diagram-line"></span><span class="diagram-node">${icon(project.id === 'aws-pulse' ? 'code' : project.icon)}</span></div><span class="graphic-label">${project.tags.slice(0, 3).map(escapeHTML).join(' / ')}</span><span class="cover-type">${t('conceptCover')}</span></div>`;
  }
  function renderProjects() {
    document.getElementById('project-grid').innerHTML = data.projects.map((project, index) => {
      const content = project[language];
      const coverAlt = project.coverAlt?.[language] || content.title;
      return `<article class="project-card ${project.theme}"><div class="project-cover${project.coverFit === 'contain' ? ' full-image' : ''}">${project.cover ? `<button class="cover-image-link" type="button" data-image="${escapeHTML(project.cover)}" data-image-alt="${escapeHTML(coverAlt)}" aria-haspopup="dialog" aria-label="${t('enlarge')}: ${escapeHTML(coverAlt)}"><img src="${escapeHTML(project.cover)}" alt="${escapeHTML(coverAlt)}" loading="lazy" width="1280" height="820"></button><span class="cover-type">${t(project.coverFit === 'contain' ? 'projectImage' : 'screenshot')}</span>` : graphic(project)}</div><div class="project-content"><div class="project-meta"><span>${escapeHTML(content.category)}</span><span>0${index + 1}</span></div><h3>${escapeHTML(content.title)}</h3><p class="project-subtitle">${escapeHTML(content.subtitle)}</p><p class="project-summary">${escapeHTML(content.summary)}</p>${tags(project.tags)}<button class="project-button" type="button" data-project="${project.id}" aria-haspopup="dialog" aria-label="${t('view')}: ${escapeHTML(content.title)}">${t('view')}${icon('arrow')}</button>${safeURL(project.links.repository) ? `<div class="card-repository">${externalLink(project.links.repository, t('repository'))}</div>` : ''}</div></article>`;
    }).join('');
  }
  function renderDetails() {
    const project = data.projects.find(item => item.id === activeProject);
    if (!project) return;
    const content = project[language];
    const cover = project.detailCover && project.cover ? `<div class="detail-cover">${mediaFigure({ src: project.cover, ...project.coverAlt })}</div>` : '';
    document.getElementById('dialog-content').innerHTML = `<p class="project-category">${escapeHTML(content.category)}</p><h2 id="dialog-title">${escapeHTML(content.title)}</h2><p class="dialog-subtitle">${escapeHTML(content.subtitle)}</p>${tags(project.tags)}${cover}<div class="detail-section"><h3>${t('context')}</h3><p>${escapeHTML(content.context)}</p></div><div class="detail-section"><h3>${t('participation')}</h3><p>${escapeHTML(content.participation)}</p></div><div class="detail-section"><h3>${t('implementations')}</h3><ul>${content.implementations.map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul></div><div class="detail-section"><h3>${t('learning')}</h3><p>${escapeHTML(content.learning)}</p></div>${projectLinks(project).length ? `<div class="project-links">${projectLinks(project).map(key => externalLink(project.links[key], t(key))).join('')}</div>` : ''}`;
  }
  function renderCertification(item) {
    const name = typeof item.name === 'string' ? item.name : item.name[language];
    const href = safeURL(item.url);
    const visual = item.image
      ? `<div class="certification-visual"><img class="certification-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(name)}" loading="lazy"></div>`
      : `<div class="certification-mark" aria-hidden="true">${icon('award')}<span>${escapeHTML(item.short)}</span></div>`;
    const content = `${visual}<h3>${escapeHTML(name)}</h3><p class="certification-institution">${escapeHTML(item.institution)}</p>${item.date ? `<p>${escapeHTML(item.date)}</p>` : ''}${href ? `<span class="certification-destination" aria-hidden="true">${t('validate')}${icon('external')}</span>` : ''}`;
    if (!href) return `<article class="certification ${item.color}">${content}</article>`;
    const destination = new URL(item.url, location.href).hostname;
    return `<a class="certification ${item.color}" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(name)} — ${t('credentialDestination')} ${escapeHTML(destination)} (${t('newTab')})">${content}</a>`;
  }
  function renderContent() {
    document.querySelectorAll('[data-link]').forEach(link => {
      const url = safeURL(data.links[link.dataset.link]);
      link.hidden = !url;
      if (url) link.href = data.links[link.dataset.link];
    });
    document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = t('title');
    document.querySelector('meta[name="description"]').content = t('description');
    document.querySelector('meta[property="og:title"]').content = t('title');
    document.querySelector('meta[property="og:description"]').content = t('description');
    document.querySelector('[data-nav-label]').setAttribute('aria-label', t('nav'));
    closeButton.setAttribute('aria-label', t('close'));
    closeImageButton.setAttribute('aria-label', t('closeImage'));
    imageSizeButton.textContent = t(imageDialog.classList.contains('original-size') ? 'fitImage' : 'actualSize');
    renderProjects();
    document.getElementById('tool-groups').innerHTML = data.tools.map(group => `<div class="tool-group"><h3>${icon(group.icon)}${escapeHTML(group[language])}</h3><ul class="tool-list">${group.items.map(item => `<li><span class="tool-logo${['Flask', 'Wazuh', 'FortiGate', 'AWS'].includes(item) ? ' light-surface' : ''}" aria-hidden="true">${data.toolLogos[item] ? `<img src="${escapeHTML(data.toolLogos[item])}" alt="" loading="lazy" width="36" height="36">` : icon(group.icon)}</span><span class="tool-name">${escapeHTML(item)}</span></li>`).join('')}</ul></div>`).join('');
    document.getElementById('about-text').innerHTML = data.about[language].map(value => `<p>${escapeHTML(value)}</p>`).join('');
    document.getElementById('education-list').innerHTML = data.education.map(item => `<article class="education-item"><p class="education-period">${escapeHTML(item.period)}${item.ongoing ? `<span>${t('ongoing')}</span>` : ''}</p><h4>${escapeHTML(item[language])}</h4><p>${escapeHTML(item.school)}</p></article>`).join('');
    document.getElementById('experience-list').innerHTML = data.experience.map(item => `<article class="experience-card"><div class="company-logo">${item.logo ? `<img src="${escapeHTML(item.logo)}" alt="${escapeHTML(item.company)}" loading="lazy" width="88" height="88">` : escapeHTML(item.initials)}</div><div class="experience-content"><div class="experience-top"><div><p class="company-name">${escapeHTML(item.company)}${item.current ? `<span class="current-label">${t('current')}</span>` : ''}</p><h3>${escapeHTML(item[language].role)}</h3></div><p class="experience-period">${escapeHTML(item[language].period)}</p></div><ul>${item[language].bullets.map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul></div></article>`).join('');
    document.getElementById('certification-grid').innerHTML = data.certifications.map(renderCertification).join('');
    document.getElementById('year').textContent = new Date().getFullYear();
    if (activeProject) renderDetails();
  }
  function setLanguage(nextLanguage) {
    if (!translations[nextLanguage] || nextLanguage === language) return;
    const readingEdge = document.querySelector('.header').getBoundingClientRect().height + 120;
    const section = [...document.querySelectorAll('main > section')].reverse().find(item => item.getBoundingClientRect().top <= readingEdge) || document.querySelector('.hero');
    const offset = section.getBoundingClientRect().top;
    const modalOffset = dialog.scrollTop;
    language = nextLanguage;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Keep the switch functional without storage. */ }
    renderContent();
    window.scrollBy({ top: section.getBoundingClientRect().top - offset, behavior: 'instant' });
    if (dialog.open) dialog.scrollTop = modalOffset;
  }
  function syncScrollLock() {
    document.body.classList.toggle('dialog-open', dialog.open || imageDialog.open);
  }
  function openImage(trigger) {
    const source = trigger.dataset.image;
    if (!source?.startsWith('assets/') || source.includes('..')) return;
    imageOpener = trigger;
    activeImage = source;
    imageDialog.classList.remove('original-size');
    imageSizeButton.setAttribute('aria-pressed', 'false');
    imageSizeButton.textContent = t('actualSize');
    document.getElementById('image-status').hidden = true;
    imageView.hidden = true;
    imageView.alt = trigger.dataset.imageAlt || '';
    imageView.src = source;
    imageDialog.showModal();
    syncScrollLock();
    closeImageButton.focus({ preventScroll: true });
  }
  imageView.addEventListener('load', () => { imageView.hidden = false; });
  imageView.addEventListener('error', () => {
    imageView.hidden = true;
    const status = document.getElementById('image-status');
    status.textContent = t('imageError');
    status.hidden = false;
  });
  closeImageButton.addEventListener('click', () => imageDialog.close());
  imageSizeButton.addEventListener('click', () => {
    const original = imageDialog.classList.toggle('original-size');
    imageSizeButton.setAttribute('aria-pressed', String(original));
    imageSizeButton.textContent = t(original ? 'fitImage' : 'actualSize');
  });
  imageDialog.addEventListener('close', () => {
    syncScrollLock();
    const target = imageOpener?.isConnected ? imageOpener : [...document.querySelectorAll('[data-image]')].find(element => element.dataset.image === activeImage);
    target?.focus({ preventScroll: true });
    imageView.removeAttribute('src');
    imageView.hidden = true;
    imageOpener = null;
    activeImage = null;
  });
  imageDialog.addEventListener('click', event => {
    const box = imageDialog.getBoundingClientRect();
    if (event.target === imageDialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) imageDialog.close();
  });
  document.addEventListener('click', event => {
    const languageButton = event.target.closest('[data-lang]');
    if (languageButton) setLanguage(languageButton.dataset.lang);
    const imageButton = event.target.closest('[data-image]');
    if (imageButton) { openImage(imageButton); return; }
    const projectButton = event.target.closest('[data-project]');
    if (!projectButton) return;
    opener = projectButton;
    activeProject = projectButton.dataset.project;
    renderDetails();
    dialog.showModal();
    syncScrollLock();
    dialog.scrollTop = 0;
    closeButton.focus();
  });
  closeButton.addEventListener('click', () => dialog.close());
  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const modal = event.currentTarget;
    const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')].filter(element => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
      event.preventDefault(); first?.focus();
    }
  }
  dialog.addEventListener('keydown', trapFocus);
  imageDialog.addEventListener('keydown', trapFocus);
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    const projectId = activeProject;
    activeProject = null;
    syncScrollLock();
    const returnTarget = opener?.isConnected ? opener : document.querySelector(`[data-project="${projectId}"]`);
    returnTarget?.focus({ preventScroll: true });
    opener = null;
  });
  renderContent();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('nav a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
})();
