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
      "Леший — хозяин леса. Он может казаться высоким, как дерево, или крошечным, как травинка. Путников он сбивает с пути и водит кругами. Но если уважать лес и его обитателей, Леший не враг.",
    facts:
      "Лешего часто изображают с бородой из мха и ветвями вместо волос. Ему оставляли подношения на опушке: хлеб, молоко, блины. Считалось, что Леший охраняет зверей и растения.",
    essence:
      "Суть мифа — уважение к природе. Лес живой, у него есть хозяин, и человек — гость. Артефакты с растительными мотивами часто связаны с этой верой.",
  };

  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");
  const bottomnav = document.getElementById("bottomnav");
  let currentCulture = "tatarstan";
  let toastTimer = null;

  const bottomNavScreens = ["home", "folklore", "map", "collection"];

  function showToast(message) {
    if (!toastEl) return;
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
    const target = app?.querySelector(`[data-screen="${screen}"]`);
    if (!target) {
      return;
    }

    if (opts.culture) setCulture(opts.culture);

    app.querySelectorAll(".screen.active").forEach((s) => s.classList.remove("active"));
    target.classList.add("active");

    const scroll = target.querySelector(".scroll");
    if (scroll) scroll.scrollTop = 0;

    if (bottomnav) {
      bottomnav.classList.toggle("is-hidden", screen === "splash");
      bottomnav.querySelectorAll(".bottomnav__item").forEach((btn) => {
        const dest = btn.getAttribute("data-go");
        const isActive = bottomNavScreens.includes(screen) ? dest === screen : false;
        btn.classList.toggle("is-active", isActive);
      });
    }

    document.querySelectorAll(".topnav__link").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("data-go") === screen);
    });

    if (screen === "culture" && opts.fromPin) {
      showToast(`Открыт регион: ${cultures[currentCulture].name}`);
    }
  }

  app?.addEventListener("click", (e) => {
    const goBtn = e.target.closest("[data-go]");
    if (!goBtn) return;

    const screen = goBtn.getAttribute("data-go");
    const cultureBtn = goBtn.closest("[data-culture]");
    const opts = {};

    if (cultureBtn) opts.culture = cultureBtn.getAttribute("data-culture");
    if (goBtn.id === "mapPopupGo") opts.culture = currentCulture;

    go(screen, opts);
  });

  bottomnav?.addEventListener("click", (e) => {
    const btn = e.target.closest(".bottomnav__item");
    if (!btn) return;
    const screen = btn.getAttribute("data-go");
    if (screen) go(screen);
  });

  app?.addEventListener("click", (e) => {
    const t = e.target.closest("[data-toast]");
    if (!t) return;
    showToast(t.getAttribute("data-toast"));
  });

  app?.addEventListener("click", (e) => {
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

  const mapPopup = document.getElementById("mapPopup");
  app?.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin");
    if (!pin) return;
    const key = pin.getAttribute("data-pin");
    const data = cultures[key];
    if (!data) return;
    currentCulture = key;
    document.querySelectorAll(".pin").forEach((p) => p.classList.remove("is-open"));
    pin.classList.add("is-open");
    const title = document.getElementById("mapPopupTitle");
    const text = document.getElementById("mapPopupText");
    if (title) title.textContent = data.name;
    if (text) text.textContent = data.found;
    if (mapPopup) mapPopup.hidden = false;
  });

  document.querySelector(".map-stage__bg")?.addEventListener("click", () => {
    if (mapPopup) mapPopup.hidden = true;
    document.querySelectorAll(".pin").forEach((p) => p.classList.remove("is-open"));
  });

  document.getElementById("mythTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest(".myth-tab");
    if (!tab) return;
    document.querySelectorAll(".myth-tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    const key = tab.getAttribute("data-myth");
    const bodyEl = document.getElementById("mythBody");
    if (bodyEl) bodyEl.innerHTML = `<p>${mythTexts[key] || "Текст не найден"}</p>`;
  });

  document.getElementById("folkTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll("#folkTabs .tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    const labels = {
      myths: "Раздел мифологии открыт",
      stories: "Раздел рассказов открыт",
      cartoons: "Раздел мультфильмов открыт",
      heroes: "Раздел героев и эпосов открыт",
    };
    showToast(labels[tab.getAttribute("data-tab")] || "Раздел открыт");
  });

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
      `Ты собрал ${motifs.join(", ").toLowerCase()} в формате открытки. В стиле «${style}» они звучат как короткое пожелание: береги традиции и помни о корнях.`,
    revive: (motifs, style, idea) =>
      idea ||
      `Сцена ожила: ${motifs.join(" + ")}. В стиле «${style}» прошлое не музейная витрина, а живой момент — ты внутри предания, слышишь голоса предков.`,
    visual: (motifs, style, idea) =>
      idea ||
      `Новый визуальный код из ${motifs.join(", ").toLowerCase()}. Стиль «${style}» связывает разные культуры в один узнаваемый знак наследия.`,
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

    if (tag) tag.textContent = `${actionTitles[action]} · ${style}`;
    if (title) {
      title.textContent =
        action === "postcard"
          ? "Открытка, которую можно отправить"
          : action === "revive"
            ? "Сцена, которую ты оживил"
            : "Узор, который ты собрал";
    }
    if (text) text.textContent = storyTemplates[action](motifs, style, prompt);
    if (motifsEl) motifsEl.innerHTML = motifs.map((m) => `<span>${m}</span>`).join("");
    if (result) result.hidden = false;
    result?.scrollIntoView({ behavior: "smooth", block: "nearest" });
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

  go("splash");
})();
