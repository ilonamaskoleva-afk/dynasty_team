(() => {
  const cultures = {
    tatarstan: {
      name: "Татарстан",
      desc: "Земля орнаментов, преданий и древних символов",
      image: "./images/v651_122.png",
      found: "2 артефакта открыто",
    },
    yakutia: {
      name: "Якутия",
      desc: "Северные эпосы, шаманские символы и морозы легенд",
      image: "./images/v651_124.png",
      found: "1 артефакт открыт",
    },
    pomorye: {
      name: "Поморье",
      desc: "Вышивка, мореходство и северные обряды",
      image: "./images/v651_126.png",
      found: "1 артефакт открыт",
    },
    kazakhstan: {
      name: "Казахстан",
      desc: "Степные узоры, юрты и кочевая мудрость",
      image: "./images/v651_128.png",
      found: "След ещё не найден",
    },
    uzbekistan: {
      name: "Узбекистан",
      desc: "Голубые купола, керамика и шёлковый путь",
      image: "./images/v651_130.png",
      found: "След ещё не найден",
    },
  };

  const mythTexts = {
    story:
      "Леший — хозяин леса. Он может казаться высоким, как дерево, или крошечным, как травинка. Путников он сбивает с пути, а тех, кто уважает лес — бережёт.",
    facts:
      "Лешего часто изображают с бородой из мха и ветвями вместо волос. Ему оставляли подношения на опушке: хлеб, соль, нитки. В разных губерниях его звали по-своему: лесовик, боровик, лешак.",
    essence:
      "Суть мифа — уважение к природе. Лес живой, у него есть хозяин, и человек — гость. Артефакты с растительным орнаментом хранят этот код бережного отношения к миру.",
  };

  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");
  const bottomnav = document.getElementById("bottomnav");
  let currentCulture = "tatarstan";
  let toastTimer = null;

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2200);
  }

  function setCulture(key) {
    const data = cultures[key] || cultures.tatarstan;
    currentCulture = key;
    const title = document.getElementById("cultureTitle");
    const name = document.getElementById("cultureName");
    const desc = document.getElementById("cultureDesc");
    const hero = document.querySelector("#cultureHero img");
    if (title) title.textContent = data.name;
    if (name) name.textContent = data.name;
    if (desc) desc.textContent = data.desc;
    if (hero) {
      hero.src = data.image;
      hero.alt = data.name;
    }
  }

  function go(screen, opts = {}) {
    const target = app.querySelector(`[data-screen="${screen}"]`);
    if (!target) return;

    if (opts.culture) setCulture(opts.culture);

    app.querySelectorAll(".screen.active").forEach((s) => s.classList.remove("active"));
    target.classList.add("active");

    const scroll = target.querySelector(".scroll");
    if (scroll) scroll.scrollTop = 0;

    const mainTabs = ["home", "folklore", "map", "collection", "profile"];
    bottomnav.classList.toggle("is-hidden", screen === "splash");
    bottomnav.querySelectorAll(".bottomnav__item").forEach((btn) => {
      const dest = btn.getAttribute("data-go");
      btn.classList.toggle("is-active", dest === screen || (screen === "profile" && dest === "collection" && false));
      if (mainTabs.includes(screen)) {
        btn.classList.toggle("is-active", dest === screen);
      }
    });

    document.querySelectorAll(".topnav__link").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("data-go") === screen);
    });

    if (screen === "culture" && opts.fromPin) {
      showToast(`Открыт регион: ${cultures[currentCulture].name}`);
    }
  }

  // Navigation via data-go
  app.addEventListener("click", (e) => {
    const goBtn = e.target.closest("[data-go]");
    if (!goBtn) return;

    const screen = goBtn.getAttribute("data-go");
    const cultureBtn = goBtn.closest("[data-culture]");
    const opts = {};
    if (cultureBtn) opts.culture = cultureBtn.getAttribute("data-culture");

    // map popup go uses current culture
    if (goBtn.id === "mapPopupGo") opts.culture = currentCulture;

    go(screen, opts);
  });

  // Toast triggers
  app.addEventListener("click", (e) => {
    const t = e.target.closest("[data-toast]");
    if (!t) return;
    showToast(t.getAttribute("data-toast"));
  });

  // Collect artifact
  app.addEventListener("click", (e) => {
    const collect = e.target.closest("[data-collect]");
    if (!collect) return;
    const badge = document.getElementById("confirmBadge");
    if (badge) badge.textContent = "3/8 подтверждено!";
    const grid = document.getElementById("collectionGrid");
    if (grid) {
      const locked = grid.querySelector(".c-item:not(.unlocked):not(.more)");
      if (locked) locked.classList.add("unlocked");
    }
    showToast("Артефакт добавлен в коллекцию");
    setTimeout(() => go("collection"), 700);
  });

  // Map pins
  const mapPopup = document.getElementById("mapPopup");
  app.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin");
    if (!pin) return;
    const key = pin.getAttribute("data-pin");
    const data = cultures[key];
    if (!data) return;
    currentCulture = key;
    document.querySelectorAll(".pin").forEach((p) => p.classList.remove("is-open"));
    pin.classList.add("is-open");
    document.getElementById("mapPopupTitle").textContent = data.name;
    document.getElementById("mapPopupText").textContent = data.found;
    mapPopup.hidden = false;
  });

  // Close popup when clicking map bg
  document.querySelector(".map-stage__bg")?.addEventListener("click", () => {
    if (mapPopup) mapPopup.hidden = true;
    document.querySelectorAll(".pin").forEach((p) => p.classList.remove("is-open"));
  });

  // Myth tabs
  document.getElementById("mythTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest(".myth-tab");
    if (!tab) return;
    document.querySelectorAll(".myth-tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    const key = tab.getAttribute("data-myth");
    document.getElementById("mythBody").innerHTML = `<p>${mythTexts[key]}</p>`;
  });

  // Folklore tabs: переключают блоки-панели
  document.getElementById("folkTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    const key = tab.getAttribute("data-tab");
    document.querySelectorAll("#folkTabs .tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelectorAll("#folkPanels .folk-panel").forEach((p) => {
      p.hidden = p.getAttribute("data-panel") !== key;
    });
  });

  // Create workshop
  document.getElementById("createActions")?.addEventListener("click", (e) => {
    const card = e.target.closest(".format");
    if (!card) return;
    document.querySelectorAll(".format").forEach((c) => c.classList.remove("is-selected"));
    card.classList.add("is-selected");
  });

  document.getElementById("motifs")?.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    chip.classList.toggle("is-selected");
  });

  document.getElementById("styles")?.addEventListener("click", (e) => {
    const style = e.target.closest(".style");
    if (!style) return;
    document.querySelectorAll(".style").forEach((s) => s.classList.remove("is-selected"));
    style.classList.add("is-selected");
  });

  const actionTitles = {
    postcard: "Открытка",
    revive: "Оживление",
    visual: "Узор",
  };

  const storyTemplates = {
    postcard: (motifs, style, idea) =>
      idea ||
      `Ты собрал ${motifs.join(", ").toLowerCase()} в формате открытки. В стиле «${style}» они звучат как короткое пожелание: береги дом, помни корни, передай тепло дальше.`,
    revive: (motifs, style, idea) =>
      idea ||
      `Сцена ожила: ${motifs.join(" + ")}. В стиле «${style}» прошлое не музейная витрина, а живой момент — ты внутри предания, а не снаружи.`,
    visual: (motifs, style, idea) =>
      idea ||
      `Новый визуальный код из ${motifs.join(", ").toLowerCase()}. Стиль «${style}» связывает разные культуры в один узнаваемый знак — твой личный след наследия.`,
  };

  document.getElementById("generateBtn")?.addEventListener("click", () => {
    const prompt = document.getElementById("genPrompt")?.value.trim();
    const action = document.querySelector(".format.is-selected")?.getAttribute("data-action") || "postcard";
    const style = document.querySelector(".style.is-selected")?.textContent || "Древний";
    const motifs = [...document.querySelectorAll(".chip.is-selected")].map((c) => c.textContent);

    if (motifs.length < 2) {
      showToast("Выбери хотя бы 2 следа");
      return;
    }

    const result = document.getElementById("genResult");
    const tag = document.getElementById("genTag");
    const title = document.getElementById("genTitle");
    const text = document.getElementById("genText");
    const motifsEl = document.getElementById("genMotifs");

    tag.textContent = `${actionTitles[action]} · ${style}`;
    title.textContent =
      action === "postcard"
        ? "Открытка, которую можно отправить"
        : action === "revive"
          ? "Сцена, которую ты оживил"
          : "Узор, который ты собрал";
    text.textContent = storyTemplates[action](motifs, style, prompt);
    motifsEl.innerHTML = motifs.map((m) => `<span>${m}</span>`).join("");
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("История собрана");
  });

  document.getElementById("findBtn")?.addEventListener("click", () => {
    const q = document.getElementById("artifactSearch")?.value.trim();
    if (!q) {
      showToast("Введите описание артефакта");
      return;
    }
    showToast("Похожий след найден: Татарский орнамент");
    setTimeout(() => go("artifact"), 800);
  });

  // Start
  go("splash");
})();
