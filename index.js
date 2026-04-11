 /* ── Cursor ── */
      const cur = document.getElementById("cursor");
      const trail = document.getElementById("cursor-trail");
      let mx = 0,
        my = 0;
      if (cur && trail) {
        document.addEventListener("mousemove", (e) => {
          mx = e.clientX;
          my = e.clientY;
          cur.style.left = mx + "px";
          cur.style.top = my + "px";
          setTimeout(() => {
            trail.style.left = mx + "px";
            trail.style.top = my + "px";
          }, 80);
        });
        document
          .querySelectorAll("a,button,.proj-card,.stack-pill,.contact-card")
          .forEach((el) => {
            el.addEventListener("mouseenter", () =>
              cur.classList.add("hovering"),
            );
            el.addEventListener("mouseleave", () =>
              cur.classList.remove("hovering"),
            );
          });
      }

      /* ── Count up ── */
      function countUp(id, target, suffix, duration) {
        const el = document.getElementById(id);
        if (!el) return;
        let start = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          start = Math.min(start + step, target);
          el.textContent = Math.round(start) + suffix;
          if (start >= target) clearInterval(t);
        }, 16);
      }
      setTimeout(() => {
        countUp("stat-projects", 5, "", 1200);
        countUp("stat-years", 0, " yr", 900);
      }, 900);

      /* ── Scroll reveal ── */
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              if (
                e.target.classList.contains("about-right") ||
                e.target.closest(".about-right")
              ) {
                setTimeout(() => {
                  document
                    .querySelectorAll(".skill-fill")
                    .forEach((f) => (f.style.transform = "scaleX(1)"));
                }, 200);
              }
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      function observeReveals() {
        document.querySelectorAll(".reveal").forEach((el, i) => {
          el.style.transitionDelay = (i % 3) * 0.08 + "s";
          if (el.dataset.revealObserved === "1") return;
          el.dataset.revealObserved = "1";
          observer.observe(el);
        });
      }

      observeReveals();

      /* Skill bars trigger */
      const aboutObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setTimeout(
                () =>
                  document
                    .querySelectorAll(".skill-fill")
                    .forEach((f) => (f.style.transform = "scaleX(1)")),
                300,
              );
              aboutObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      const aboutRight = document.querySelector(".about-right");
      if (aboutRight) aboutObs.observe(aboutRight);

      function escapeHtml(s) {
        return String(s)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#39;");
      }

      function nl2br(s) {
        return escapeHtml(s).replaceAll("\n", "<br/>");
      }

      /** `links.github`: string URL, or array of { label, url } for multiple repos (e.g. front/back). */
      function renderGithubLinks(github) {
        if (!github) return "";
        if (typeof github === "string") {
          return `<a href="${escapeHtml(
            github,
          )}" class="btn-ghost proj-btn" target="_blank" rel="noopener noreferrer">github</a>`;
        }
        if (Array.isArray(github)) {
          return github
            .filter((item) => item && typeof item.url === "string" && item.url.trim())
            .map((item) => {
              const label =
                typeof item.label === "string" && item.label.trim()
                  ? item.label.trim()
                  : "github";
              return `<a href="${escapeHtml(
                item.url.trim(),
              )}" class="btn-ghost proj-btn" target="_blank" rel="noopener noreferrer">${escapeHtml(
                label,
              )}</a>`;
            })
            .join("");
        }
        return "";
      }

      function renderProjects() {
        const mount = document.getElementById("projects");
        if (!mount) return;

        const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
        if (!projects.length) return;

        mount.innerHTML = projects
          .map((p) => {
            const site = p?.links?.site;
            const github = p?.links?.github;
            const tags = Array.isArray(p?.tags) ? p.tags : [];

            const thumb = p?.thumb;
            let thumbHtml = "";
            if (thumb?.type === "img" && thumb?.src) {
              const w = thumb?.width ?? 220;
              const h = thumb?.height ?? 160;
              thumbHtml = `<div class="proj-thumb"><img src="${escapeHtml(
                thumb.src,
              )}" alt="${escapeHtml(thumb.alt ?? p.title ?? "Project preview")}" width="${escapeHtml(
                w,
              )}" height="${escapeHtml(h)}"/></div>`;
            } else if (thumb?.type === "canvas") {
              const id = thumb?.id ?? "";
              const w = thumb?.width ?? 220;
              const h = thumb?.height ?? 160;
              thumbHtml = `<div class="proj-thumb"><canvas id="${escapeHtml(
                id,
              )}" width="${escapeHtml(w)}" height="${escapeHtml(h)}"></canvas></div>`;
            }

            const features =
              typeof p?.features === "string" && p.features.trim()
                ? `<br/>Features: ${escapeHtml(p.features)}`
                : "";

            const siteBtn = site
              ? `<a href="${escapeHtml(
                  site,
                )}" class="btn-primary proj-btn" target="_blank" rel="noopener noreferrer">view site</a>`
              : `<span class="btn-primary proj-btn proj-btn-disabled" aria-disabled="true">view site (soon)</span>`;

            const githubBtns = renderGithubLinks(github);

            return `
<article class="proj-card reveal">
  <div class="proj-body">
    <div>
      <div class="proj-meta">${escapeHtml(p.meta ?? "")}</div>
      <div class="proj-title">${escapeHtml(p.title ?? "")}</div>
      <div class="proj-desc">
        ${nl2br(p.description ?? "")}${features}
      </div>
      <div class="proj-actions">
        ${siteBtn}
        ${githubBtns}
      </div>
    </div>
    <div class="proj-foot">
      <div class="proj-tags">
        ${tags
          .map((t) => `<span class="proj-tag">${escapeHtml(t)}</span>`)
          .join("")}
      </div>
      <div class="proj-arrow">↗</div>
    </div>
  </div>
  ${thumbHtml}
</article>`;
          })
          .join("");
      }

      renderProjects();
      observeReveals();

      /* ── Canvas project thumbnails ── */
      function rr(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }

      function drawDash(canvas) {
        const ctx = canvas.getContext("2d");
        const w = canvas.width,
          h = canvas.height;
        ctx.fillStyle = "#0e1520";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#ffffff09";
        rr(ctx, 0, 0, w, 22, 0);
        ctx.fill();
        ctx.fillStyle = "#22d3ee";
        rr(ctx, 10, 6, 28, 10, 3);
        ctx.fill();
        ctx.fillStyle = "#ffffff08";
        rr(ctx, 44, 6, 20, 10, 3);
        ctx.fill();
        const hw = (w - 28) / 2;
        [0, 1].forEach((i) => {
          ctx.fillStyle = "#ffffff07";
          rr(ctx, 10 + i * (hw + 8), 28, hw, 32, 4);
          ctx.fill();
          ctx.fillStyle = "#22d3ee" + (i ? "40" : "aa");
          rr(ctx, 16 + i * (hw + 8), 35, 32, 10, 3);
          ctx.fill();
        });
        const bh = h - 74;
        const bw = (w - 28) / 6;
        const vals = [0.5, 0.8, 0.45, 1.0, 0.65, 0.72];
        vals.forEach((v, i) => {
          ctx.fillStyle = i === 3 ? "#22d3ee" : "#22d3ee30";
          rr(ctx, 10 + i * (bw + 4), h - 10 - bh * v, bw, bh * v, [2, 2, 0, 0]);
          ctx.fill();
        });
      }

      function drawTool(canvas) {
        const ctx = canvas.getContext("2d");
        const w = canvas.width,
          h = canvas.height;
        ctx.fillStyle = "#0f160f";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#ffffff07";
        rr(ctx, 8, 8, 50, h - 16, 5);
        ctx.fill();
        [0, 1, 2, 3, 4].forEach((i) => {
          ctx.fillStyle = i === 1 ? "#4ade8020" : "transparent";
          if (i === 1) {
            ctx.fillStyle = "#4ade8020";
            ctx.fillRect(8, 20 + i * 22, 50, 18);
          }
          ctx.fillStyle = i === 1 ? "#4ade80" : "#ffffff18";
          rr(ctx, 14, 24 + i * 22, 10, 10, 2);
          ctx.fill();
          ctx.fillStyle = "#ffffff12";
          rr(ctx, 28, 25 + i * 22, 22, 8, 2);
          ctx.fill();
        });
        ctx.fillStyle = "#ffffff07";
        rr(ctx, 66, 8, w - 74, h - 16, 5);
        ctx.fill();
        [0, 1, 2].forEach((i) => {
          ctx.fillStyle = "#ffffff08";
          rr(ctx, 72, 18 + i * 36, w - 86, 14, 2);
          ctx.fill();
          const fills = [0.6, 0.85, 0.4];
          ctx.fillStyle = "#4ade80";
          rr(ctx, 72, 18 + i * 36, (w - 86) * fills[i], 14, 2);
          ctx.fill();
          ctx.fillStyle = "#ffffff0a";
          rr(ctx, 72, 38 + i * 36, w - 86, 10, 2);
          ctx.fill();
        });
      }

      function drawPortfolio(canvas) {
        const ctx = canvas.getContext("2d");
        const w = canvas.width,
          h = canvas.height;
        ctx.fillStyle = "#0c0c0e";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#ffffff08";
        rr(ctx, 0, 0, w, 20, 0);
        ctx.fill();
        ctx.fillStyle = "#e8e8e6";
        rr(ctx, 8, 6, 8, 8, 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff10";
        rr(ctx, 22, 7, w - 30, 6, 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff06";
        rr(ctx, 12, 26, w - 24, 44, 4);
        ctx.fill();
        ctx.fillStyle = "#e8e8e622";
        rr(ctx, 22, 38, (w - 44) * 0.72, 5, 2);
        ctx.fill();
        ctx.fillStyle = "#e8e8e615";
        rr(ctx, 22, 48, (w - 44) * 0.48, 5, 2);
        ctx.fill();
        const gw = (w - 36) / 3;
        [0, 1, 2].forEach((i) => {
          ctx.fillStyle = "#ffffff07";
          rr(ctx, 12 + i * (gw + 6), 78, gw, h - 90, 3);
          ctx.fill();
        });
      }

      setTimeout(() => {
        const c2 = document.getElementById("cv2");
        const c3 = document.getElementById("cv3");
        const c4 = document.getElementById("cv4");
        if (c2) {
          c2.width = c2.offsetWidth || 220;
          c2.height = c2.offsetHeight || 160;
          drawDash(c2);
        }
        if (c3) {
          c3.width = c3.offsetWidth || 220;
          c3.height = c3.offsetHeight || 160;
          drawTool(c3);
        }
        if (c4) {
          c4.width = c4.offsetWidth || 220;
          c4.height = c4.offsetHeight || 160;
          drawPortfolio(c4);
        }
      }, 200);

      /* ── Active nav on scroll ── */
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links a");
      window.addEventListener(
        "scroll",
        () => {
          let current = "";
          sections.forEach((s) => {
            if (window.scrollY >= s.offsetTop - 100) current = s.id;
          });
          navLinks.forEach((a) => {
            a.style.color =
              a.getAttribute("href") === "#" + current ? "var(--fg)" : "";
          });
        },
        { passive: true },
      );

      const contactForm = document.getElementById("contact-form");
      const formStatus = document.getElementById("form-status");

      if (contactForm && formStatus) {
        contactForm.addEventListener("submit", async (e) => {
          e.preventDefault();

          if (
            typeof contactForm.action === "string" &&
            contactForm.action.includes("YOUR_FORM_ID")
          ) {
            formStatus.textContent =
              "form not connected yet — please set your Formspree form id.";
            return;
          }

          formStatus.textContent = "sending...";

          const formData = new FormData(contactForm);

          try {
            const response = await fetch(contactForm.action, {
              method: "POST",
              body: formData,
              headers: {
                Accept: "application/json",
              },
            });

            if (response.ok) {
              formStatus.textContent = "message sent successfully.";
              contactForm.reset();
            } else {
              formStatus.textContent = "something went wrong. please try again.";
            }
          } catch {
            formStatus.textContent =
              "unable to send right now. please try again later.";
          }
        });
      }

      function copyEmail() {
        const email = "gunyaluck0619@gmail.com";
      
        navigator.clipboard.writeText(email).then(() => {
          const toast = document.createElement("div");
          toast.textContent = "email copied";
          toast.className = "toast";
      
          document.body.appendChild(toast);
      
          setTimeout(() => {
            toast.remove();
          }, 2000);
        });
      }