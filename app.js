/* ============================================================
   DR. RAFAEL ANDRADE — APP DE TREINO
   Lógica do app (PWA)
   ============================================================ */

const DAY_BADGES = {
  push: { label: "Push", cls: "badge-push" },
  legs: { label: "Pernas", cls: "badge-legs" },
  pull: { label: "Pull", cls: "badge-pull" },
  descanso: { label: "Descanso", cls: "badge-descanso" }
};

const state = {
  profile: localStorage.getItem("pt_profile") || null,
  phase: localStorage.getItem("pt_phase") || "adaptacao",
  currentDayIndex: null
};

/* ---------------- Utilidades ---------------- */

function getWeekKey() {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-w${week}`;
}

function setKey(profile, dayIdx, slug, setIndex) {
  return `pt_set_${profile}_${getWeekKey()}_${dayIdx}_${slug}_${setIndex}`;
}

function jsWeekdayToIndex(jsDay) {
  // JS: 0=domingo...6=sábado. SEMANA[]: 0=segunda...6=domingo
  return jsDay === 0 ? 6 : jsDay - 1;
}

/* ---------------- Navegação entre telas ---------------- */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}

/* ---------------- Tela de perfil ---------------- */

document.querySelectorAll(".profile-card").forEach(btn => {
  btn.addEventListener("click", () => {
    state.profile = btn.dataset.profile;
    localStorage.setItem("pt_profile", state.profile);
    renderWeekScreen();
    showScreen("screen-week");
  });
});

document.getElementById("btn-switch-profile").addEventListener("click", () => {
  showScreen("screen-profile");
});

/* ---------------- Tela da semana ---------------- */

function renderWeekScreen() {
  const treino = TREINOS[state.profile];
  document.getElementById("week-profile-avatar").textContent = treino.nome[0];
  document.getElementById("week-profile-avatar").style.background = treino.cor;
  document.getElementById("week-profile-name").textContent = treino.nome;

  renderPhaseBanner();

  const todayIdx = jsWeekdayToIndex(new Date().getDay());
  const list = document.getElementById("week-list");
  list.innerHTML = "";

  SEMANA.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "day-card" + (idx === todayIdx ? " today" : "");

    const badge = DAY_BADGES[item.treino];
    let workoutName = "Descanso ativo";
    let progressHtml = "";

    if (item.treino !== "descanso") {
      const diaTreino = treino.dias[item.treino];
      workoutName = diaTreino.subtitulo;
      const { done, total } = countProgress(state.profile, idx, item.treino);
      progressHtml = `<div class="day-progress">${done}/${total} séries marcadas</div>`;
    }

    card.innerHTML = `
      <div class="day-card-left">
        <span class="day-name">${item.dia}${idx === todayIdx ? '<span class="day-today-tag"> · HOJE</span>' : ''}</span>
        <span class="day-workout-name">${workoutName}</span>
        ${progressHtml}
      </div>
      <span class="day-badge ${badge.cls}">${badge.label}</span>
    `;
    card.addEventListener("click", () => openDay(idx));
    list.appendChild(card);
  });
}

function countProgress(profile, dayIdx, dayKey) {
  const diaTreino = TREINOS[profile].dias[dayKey];
  const series = FASES[state.phase].series;
  let done = 0, total = 0;
  diaTreino.exercicios.forEach(ex => {
    for (let i = 0; i < series; i++) {
      total++;
      if (localStorage.getItem(setKey(profile, dayIdx, ex.slug, i)) === "1") done++;
    }
  });
  return { done, total };
}

function renderPhaseBanner() {
  const fase = FASES[state.phase];
  document.getElementById("phase-label").textContent = `Fase: ${fase.label}`;
  const other = state.phase === "adaptacao" ? "progressao" : "adaptacao";
  document.getElementById("phase-toggle").textContent = `Mudar para ${FASES[other].label.split(" (")[0]}`;
}

document.getElementById("phase-toggle").addEventListener("click", () => {
  state.phase = state.phase === "adaptacao" ? "progressao" : "adaptacao";
  localStorage.setItem("pt_phase", state.phase);
  renderWeekScreen();
});

document.getElementById("btn-phase").addEventListener("click", () => {
  document.getElementById("phase-banner").scrollIntoView({ behavior: "smooth" });
});

/* ---------------- Tela do dia ---------------- */

function openDay(idx) {
  const item = SEMANA[idx];
  state.currentDayIndex = idx;

  if (item.treino === "descanso") {
    showScreen("screen-rest");
    return;
  }

  const treino = TREINOS[state.profile];
  const dia = treino.dias[item.treino];

  document.getElementById("day-title").textContent = `${item.dia} · ${dia.titulo}`;
  document.getElementById("day-subtitle").textContent = dia.subtitulo;

  const notaEl = document.getElementById("day-nota");
  if (item.nota) {
    notaEl.textContent = "💡 " + item.nota;
    notaEl.classList.remove("hidden");
  } else {
    notaEl.classList.add("hidden");
  }

  const finalEl = document.getElementById("day-finalizador");
  if (dia.finalizador) {
    finalEl.textContent = "🔥 Finalizador: " + dia.finalizador;
    finalEl.classList.remove("hidden");
  } else {
    finalEl.classList.add("hidden");
  }

  renderExerciseList(dia, idx);
  showScreen("screen-day");
}

function renderExerciseList(dia, dayIdx) {
  const container = document.getElementById("exercise-list");
  container.innerHTML = "";
  const series = FASES[state.phase].series;

  dia.exercicios.forEach((exRef, i) => {
    const ex = EXERCISES[exRef.slug];
    const card = document.createElement("div");
    card.className = "exercise-card" + (exRef.destaque ? " exercise-destaque" : "");

    const setsHtml = Array.from({ length: series }, (_, si) => {
      const checked = localStorage.getItem(setKey(state.profile, dayIdx, exRef.slug, si)) === "1";
      return `<button class="set-check${checked ? " checked" : ""}" data-slug="${exRef.slug}" data-set="${si}">${si + 1}</button>`;
    }).join("");

    card.innerHTML = `
      <div class="exercise-head">
        <div>
          <div class="exercise-name">${ex.nome}</div>
          <div class="exercise-group">${ex.grupo}${exRef.nota ? " · " + exRef.nota : ""}</div>
        </div>
        <div class="exercise-meta"><strong>${series}×${exRef.reps}</strong><br>desc. ${exRef.descanso}</div>
      </div>
      <div class="exercise-body">
        <button class="exercise-video-btn" data-slug="${exRef.slug}" data-title="${ex.nome}">
          <span class="play-ic">▶</span> Ver animação 3D do movimento
        </button>
        <div class="tech-section">
          <h4>Como executar</h4>
          <ol>${ex.tecnica.map(t => `<li>${t}</li>`).join("")}</ol>
        </div>
        <div class="tech-section">
          <h4>Músculos trabalhados</h4>
          <div class="tag-list">${ex.musculos.map(m => `<span class="tag">${m}</span>`).join("")}</div>
        </div>
        <div class="tech-section">
          <h4>Erros comuns a evitar</h4>
          <div class="tag-list">${ex.erros.map(m => `<span class="tag erro-tag">⚠ ${m}</span>`).join("")}</div>
        </div>
        <div class="tech-section">
          <h4>Séries concluídas</h4>
          <div class="set-checks">${setsHtml}</div>
        </div>
      </div>
    `;

    const head = card.querySelector(".exercise-head");
    const body = card.querySelector(".exercise-body");
    head.addEventListener("click", () => body.classList.toggle("open"));

    card.querySelector(".exercise-video-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openVideoModal(exRef.slug, ex.nome);
    });

    card.querySelectorAll(".set-check").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const slug = btn.dataset.slug;
        const si = btn.dataset.set;
        const key = setKey(state.profile, dayIdx, slug, si);
        const isChecked = localStorage.getItem(key) === "1";
        if (isChecked) {
          localStorage.removeItem(key);
          btn.classList.remove("checked");
        } else {
          localStorage.setItem(key, "1");
          btn.classList.add("checked");
        }
      });
    });

    container.appendChild(card);
  });
}

document.getElementById("btn-back-week").addEventListener("click", () => {
  renderWeekScreen();
  showScreen("screen-week");
});
document.getElementById("btn-back-week-rest").addEventListener("click", () => {
  renderWeekScreen();
  showScreen("screen-week");
});

document.getElementById("btn-reset-day").addEventListener("click", () => {
  if (!confirm("Reiniciar as marcações de séries deste treino nesta semana?")) return;
  const item = SEMANA[state.currentDayIndex];
  const dia = TREINOS[state.profile].dias[item.treino];
  const series = FASES[state.phase].series;
  dia.exercicios.forEach(ex => {
    for (let i = 0; i < series; i++) {
      localStorage.removeItem(setKey(state.profile, state.currentDayIndex, ex.slug, i));
    }
  });
  renderExerciseList(dia, state.currentDayIndex);
});

/* ---------------- Modal de vídeo do exercício (YouTube) ---------------- */

function openVideoModal(slug, titulo) {
  const ex = EXERCISES[slug];
  const video = ex && ex.video;
  const wrap = document.getElementById("video-embed-wrap");
  document.getElementById("video-caption").textContent = video
    ? `${titulo} — ${video.titulo}`
    : `${titulo} — vídeo indisponível`;
  wrap.innerHTML = video
    ? `<iframe src="https://www.youtube.com/embed/${video.id}" title="${video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    : "";
  document.getElementById("video-modal").classList.remove("hidden");
}

function closeVideoModal() {
  document.getElementById("video-modal").classList.add("hidden");
  document.getElementById("video-embed-wrap").innerHTML = "";
}

document.getElementById("video-modal-close").addEventListener("click", closeVideoModal);
document.querySelector("#video-modal .modal-backdrop").addEventListener("click", closeVideoModal);

/* ---------------- Modal de instalação ---------------- */

function openInstallModal() { document.getElementById("install-modal").classList.remove("hidden"); }
function closeInstallModal() { document.getElementById("install-modal").classList.add("hidden"); }
document.getElementById("btn-install-help").addEventListener("click", openInstallModal);
document.getElementById("install-modal-close").addEventListener("click", closeInstallModal);
document.querySelector("#install-modal .modal-backdrop").addEventListener("click", closeInstallModal);

/* ---------------- Inicialização ---------------- */

function init() {
  if (state.profile && TREINOS[state.profile]) {
    renderWeekScreen();
    showScreen("screen-week");
  } else {
    showScreen("screen-profile");
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});

    // Quando uma nova versão do app assume o controle da página, recarrega
    // automaticamente uma vez para garantir que HTML/JS/animações atualizados
    // apareçam sem o usuário precisar limpar cache manualmente.
    let reloadedForUpdate = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloadedForUpdate) return;
      reloadedForUpdate = true;
      window.location.reload();
    });

    // Força checagem por atualização toda vez que o app é aberto/volta ao foco.
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) reg.update().catch(() => {});
    });
  }
}

init();
