(() => {
  const cultures = {
    tatarstan: {
      name: "Татарстан",
      desc: "Земля орнаментов, преданий и древних символов",
      image: "./images/93028e24-5412-458a-b96e-45420039c435.webp",
      found: "2 артефакта открыто",
      blurb: "Татарская культура — это мир геометрических орнаментов, где каждый узор несет смысл. Резьба по дереву, вышивка, керамика. Шурале — лесной дух, охраняющий границы между миром людей и природы.",
      artifact: {
        title: "Татарский орнамент",
        desc: "Древний язык символов",
        image: "./images/93028e24-5412-458a-b96e-45420039c435.webp"
      },
      myth: {
        name: "Шурале",
        sub: "Лесной дух татарского фольклора",
        image: "./images/93028e24-5412-458a-b96e-45420039c435.webp"
      },
      museum: "Музей изобразительных искусств Республики Татарстан"
    },
    yakutia: {
      name: "Якутия",
      desc: "Северные эпосы, шаманские символы и морозы легенд",
      image: "./images/yakutia_pattern.png",
      found: "1 артефакт открыт",
      blurb: "Якутия — край вечной мерзлоты и огромного неба. Олонхо — якутский эпос, одна из самых длинных в мире. Узоры украшают одежду, коней, жилища. Нюргун Боотур — герой, рожденный из льда и огня.",
      artifact: {
        title: "Якутский узор Олонхо",
        desc: "Пути героев в ледяном царстве",
        image: "./images/yakutia_pattern.png"
      },
      myth: {
        name: "Нюргун Боотур",
        sub: "Герой якутского эпоса",
        image: "./images/yakutia_hero.jpg"
      },
      museum: "Музей истории Якутии"
    },
    pomorye: {
      name: "Поморье",
      desc: "Вышивка, мореходство и северные обряды",
      image: "./images/v651_126.png",
      found: "1 артефакт открыт",
      blurb: "Поморье — царство белых ночей и вышивки. Архангельская вышивка известна своими геометрическими рисунками красной нитью. Морские обряды, скань, традиционные ремесла. Лебедь, олень, растительные орнаменты символизируют плодородие и защиту.",
      artifact: {
        title: "Архангельская вышивка",
        desc: "Красная нить истории",
        image: "./images/pomorye_embroidery.png"
      },
      myth: {
        name: "Сирин",
        sub: "Птица радости поморских морей",
        image: "./images/pomorye_sirin.jpg"
      },
      museum: "Архангельский краеведческий музей"
    },
    kazakhstan: {
      name: "Казахстан",
      desc: "Степные узоры, юрты и кочевая мудрость",
      image: "./images/v651_128.png",
      found: "След ещё не найден",
      blurb: "Казахстан — бесконечные степи и кочевая культура. Казахские орнаменты (гилем) украшают ковры, одежду, предметы быта. Каждый элемент имеет название: рог барана, верблюжий след, звезда. Юрта — не просто жилище, а отражение космоса.",
      artifact: {
        title: "Казахский килем",
        desc: "Ковер степной мудрости",
        image: "./images/kazakhstan_carpet.png"
      },
      myth: {
        name: "Алдар-Косе",
        sub: "Хитрец из казахских сказок",
        image: "./images/kazakhstan_aldarkose.jpg"
      },
      museum: "Национальный музей Республики Казахстан"
    },
    uzbekistan: {
      name: "Узбекистан",
      desc: "Голубые купола, керамика и шёлковый путь",
      image: "./images/93028e24-5412-458a-b96e-45420039c435.webpf_aW1nLmdlbGlvcGhvdG8uY29tL2themFuLzAzX2themFuLmpwZz9fX2lkPTE0ODM4Nw==.jpeg",
      found: "След ещё не найден",
      blurb: "Узбекистан — страна торговых путей и голубых дворцов. Керамика Рипы, расписанная геометрическими узорами, славится по всему миру. Синий цвет (от лазурита) символизирует небо и вечность. Узбекский орнамент — это мир, переданный через краску и глину.",
      artifact: {
        title: "Узбекская керамика",
        desc: "Голубой путь через века",
        image: "./images/93028e24-5412-458a-b96e-45420039c435.webpf_aW1nLmdlbGlvcGhvdG8uY29tL2themFuLzAzX2themFuLmpwZz9fX2lkPTE0ODM4Nw==.jpeg"
      },
      myth: {
        name: "Хумай",
        sub: "Волшебная птица из узбекского фольклора",
        image: "./images/93028e24-5412-458a-b96e-45420039c435.webpf_aW1nLmdlbGlvcGhvdG8uY29tL2themFuLzAzX2themFuLmpwZz9fX2lkPTE0ODM4Nw==.jpeg"
      },
      museum: "Музей искусств Узбекистана"
    }
  };

  const mythTexts = {
    tatarstan: {
      story: "Шурале — хозяин леса в татарском фольклоре. Это невысокое существо, покрытое шерстью, с одним глазом на лбу. Он охраняет лес от бездумной вырубки и наказывает охотников, забывших уважение к природе. Шурале может защекотать путника до смерти, если тот нарушит лесные законы.",
      facts: "Шурале часто изображают на вышивке и резьбе. Татарские охотники оставляли в лесу подношения — хлеб и молоко. Леший в русском фольклоре очень похож на Шурале, что говорит об общих корнях финно-угорских и тюркских культур.",
      essence: "Суть мифа о Шурале — гармония с природой. Лес не враг, а живой организм, требующий уважения. Орнаменты, изображающие растения и животных, напоминают человеку о его месте в экосистеме."
    },
    yakutia: {
      story: "Нюргун Боотур — герой якутского эпоса Олонхо, рожденный из ледяного озера. Он борется с врагами холода и тьмы, защищает народ якутов от стихий и опасностей. Его путь — это путь через испытания, где каждое препятствие закаляет дух.",
      facts: "Олонхо декламируют в течение многих дней, передавая из поколения в поколение. Эпос включает десятки тысяч строф. Якутские узоры на одежде защищали воина в боях, являясь символами силы и мужества.",
      essence: "Нюргун Боотур символизирует стойкость перед холодом и невзгодами. В суровом климате Якутии герой — тот, кто не сломлен морозом и темнотой, кто несет свет и тепло в ледяное сердце земли."
    },
    pomorye: {
      story: "Сирин — мифическая птица в славянской мифологии, известная по поморским легендам. Она поет песни, приносящие радость и утешение. Сирин живет на краю света, в стране вечного света (вечного дня белых ночей). Её голос слышен только чистому сердцем.",
      facts: "Сирин часто изображается на вышивке рядом с деревом жизни. Архангельская вышивка использует красную нить на белом льне — цвета огня и снега. Эти узоры передавались от матери к дочери сотни лет.",
      essence: "Сирин символизирует духовное возвышение и утешение. В суровых условиях Поморья песня и красота — это спасение. Вышивка была не украшением, а молитвой, защитой и передачей мудрости."
    },
    kazakhstan: {
      story: "Алдар-Косе — плут и мудрец из казахских сказок. Это герой не физической силы, а ума и хитрости. Он выходит победителем из невозможных ситуаций, обманывает чертей и спасает бедняков от беды. Его истории передают уроки жизни через смех.",
      facts: "Алдар-Косе похож на такстера из других культур — перса Насреддина, русского барина. Это архетип мудреца-шута, который есть у многих народов. Казахские кочевники передавали его истории у костра, развлекая себя в долгих степных ночах.",
      essence: "Алдар-Косе учит, что ум и характер важнее физической силы. В степной культуре, где выживание зависит от умения адаптироваться, герой-интеллектуал становится образцом мудрости и свободы."
    },
    uzbekistan: {
      story: "Хумай — волшебная птица узбекского фольклора, символ матери и защиты. Её крылья спасают от бед, её пение лечит раны. Хумай появляется в самые темные моменты жизни, когда надежда почти потеряна, и дарует спасение.",
      facts: "Хумай часто вышивается на свадебных платьях узбекских невест. Она символизирует фертильность и материнство. В персидской культуре Симург (похожее существо) тоже символизирует божественную защиту.",
      essence: "Хумай олицетворяет материнскую любовь и божественное вмешательство. На Шелковом пути, где встречались разные культуры, образ защищающей птицы стал универсальным символом надежды."
    }
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
    const blurb = document.getElementById("cultureBlurb");
    const artImg = document.getElementById("cultureArtImg");
    const artLabel = document.getElementById("cultureArtLabel");
    const artTitle = document.getElementById("cultureArtTitle");
    const artText = document.getElementById("cultureArtText");
    const mythTitle = document.getElementById("cultureMythTitle");
    const mythSub = document.getElementById("cultureMythSub");
    const mythImg = document.getElementById("cultureMythImg");
    const museumName = document.getElementById("museumName");
    
    if (title) title.textContent = data.name;
    if (name) name.textContent = data.name;
    if (desc) desc.textContent = data.desc;
    if (hero) {
      hero.src = data.image;
      hero.alt = data.name;
    }
    if (blurb) blurb.textContent = data.blurb;
    
    if (artImg) artImg.src = data.artifact.image;
    if (artLabel) artLabel.textContent = "Ты нашел след";
    if (artTitle) artTitle.textContent = data.artifact.title;
    if (artText) artText.textContent = data.artifact.desc;
    
    if (mythTitle) mythTitle.textContent = data.myth.name;
    if (mythSub) mythSub.textContent = data.myth.sub;
    if (mythImg) mythImg.src = data.myth.image;
    
    if (museumName) museumName.textContent = data.museum;
    
    updateMythTexts(key);
  }

  function updateMythTexts(culture) {
    const texts = mythTexts[culture];
    if (!texts) return;
    
    const mythBody = document.getElementById("mythBody");
    const activeTab = document.querySelector(".myth-tab.is-active");
    const activeTabKey = activeTab ? activeTab.getAttribute("data-myth") : "story";
    
    if (mythBody) {
      mythBody.innerHTML = `<p>${texts[activeTabKey] || texts.story}</p>`;
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
    const texts = mythTexts[currentCulture] || mythTexts.tatarstan;
    document.getElementById("mythBody").innerHTML = `<p>${texts[key] || texts.story}</p>`;
  });

  // Folklore tabs
  document.getElementById("folkTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll("#folkTabs .tab").forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    const labels = {
      myths: "Раздел мифологии открыт",
      stories: "Раздел рассказов открыт",
      cartoons: "Раздел мультфильмов открыт",
    };
    showToast(labels[tab.getAttribute("data-tab")] || "Раздел открыт");
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
      `Ты собрал ${motifs.join(", ").toLowerCase()} в формате открытки. В стиле «${style}» они звучат как короткое пожелание: бережи дом, помни корни, носи в сердце свет предков. Можно отправить близким.`,
    revive: (motifs, style, idea) =>
      idea ||
      `Сцена ожила: ${motifs.join(" + ")}. В стиле «${style}» прошлое не музейная витрина, а живой момент — ты внутри преданий, видишь людей, слышишь песни, ощущаешь дыхание веков.`,
    visual: (motifs, style, idea) =>
      idea ||
      `Новый визуальный код из ${motifs.join(", ").toLowerCase()}. Стиль «${style}» связывает разные культуры в один узнаваемый знак. Каждый штрих несет смысл, каждый цвет — историю.`,
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
