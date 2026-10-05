const grid = document.querySelector("#project-grid");
const projectMain = document.querySelector("#project");

function projectCard(project) {
  return `
    <article class="project-card">
      <a href="project.html?project=${project.slug}" aria-label="View ${project.title}">
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-view">View project <b aria-hidden="true">↗</b></span>
        </div>
        <div class="project-meta">
          <span>${project.number}</span>
          <div><h3>${project.title}</h3><p>${project.type}</p></div>
        </div>
      </a>
    </article>`;
}

if (grid) {
  grid.innerHTML = projects.map(projectCard).join("");
}

if (projectMain) {
  const slug = new URLSearchParams(window.location.search).get("project");
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];

  if (!project) {
  projectMain.innerHTML = `<section class="not-found"><p class="eyebrow">Project not found</p><h1>Let’s get you back to the work.</h1><a class="round-link" href="index.html#work">See selected work <span aria-hidden="true">→</span></a></section>`;
  } else {
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
  document.title = `${project.title} — Arty House`;
    projectMain.innerHTML = `
      <section class="project-hero">
        <div class="project-title-block">
          <p class="eyebrow">${project.number} — ${project.type}</p>
          <h1>${project.title}</h1>
        </div>
        <figure><img src="${project.image}" alt="${project.title}" /></figure>
      </section>
      <nav class="project-pagination" aria-label="Project navigation">
        <a href="project.html?project=${previous.slug}"><span>Previous</span><strong>${previous.title}</strong></a>
        <a class="all-projects-link" href="projects.html"><span>All projects</span><strong>View all project pages <b aria-hidden="true">→</b></strong></a>
        <a href="project.html?project=${next.slug}"><span>Next</span><strong>${next.title}</strong></a>
      </nav>`;
  }
}
