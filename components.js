class ResumeGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const title = this.getAttribute("title") || "";

    const wrapper = document.createElement("section");
    wrapper.setAttribute("class", "group");

    const heading = document.createElement("h2");
    heading.setAttribute("class", "title-accent");
    heading.textContent = title;

    const slot = document.createElement("slot");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(slot);
  }
}

class ResumeSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const tech = this.getAttribute("tech") || "";
    const period = this.getAttribute("period") || "";
    const role = this.getAttribute("role") || "";

    const container = document.createElement("section");
    container.setAttribute("class", "section");

    const header = document.createElement("header");
    header.setAttribute("class", "header");

    const headerMain = document.createElement("div");
    headerMain.setAttribute("class", "header-main");

    const headerIntro = document.createElement("div");
    headerIntro.setAttribute("class", "header-intro");

    const heading = document.createElement("h3");
    heading.setAttribute("class", "title-md");
    heading.textContent = title;

    const linksSlot = document.createElement("slot");
    linksSlot.name = "links";

    headerIntro.append(heading, linksSlot);
    headerMain.append(headerIntro);

    if (description) {
      const desc = document.createElement("p");
      desc.textContent = description;
      headerMain.append(desc);
    }

    if (tech) {
      const techElem = document.createElement("p");
      techElem.setAttribute("class", "tech");
      techElem.textContent = tech;
      headerMain.append(techElem);
    }

    const headerSub = document.createElement("div");
    headerSub.setAttribute("class", "header-sub");

    const periodElem = document.createElement("p");
    periodElem.setAttribute("class", "period");
    periodElem.textContent = period;
    headerSub.append(periodElem);

    if (role) {
      const roleElem = document.createElement("p");
      roleElem.setAttribute("class", "role");
      roleElem.textContent = role;
      headerSub.append(roleElem);
    }

    header.append(headerMain, headerSub);

    const defaultSlot = document.createElement("slot");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    shadow.appendChild(linkElem);
    shadow.appendChild(container);
    container.appendChild(header);
    container.appendChild(defaultSlot);
  }
}

class ResumeItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const title = this.getAttribute("title") || "";

    const container = document.createElement("section");
    container.setAttribute("class", "item");

    const heading = document.createElement("h3");
    heading.setAttribute("class", "title-sm");
    heading.textContent = title;

    const slot = document.createElement("slot");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    shadow.appendChild(linkElem);
    shadow.appendChild(container);
    container.appendChild(heading);
    container.appendChild(slot);
  }
}

customElements.define("resume-group", ResumeGroup);
customElements.define("resume-section", ResumeSection);
customElements.define("resume-item", ResumeItem);
