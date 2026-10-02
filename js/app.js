document.addEventListener('DOMContentLoaded', () => {
  const screens = Array.from(document.querySelectorAll('.screen'));
  const toast = document.getElementById('toast');
  const mapPopup = document.getElementById('mapPopup');

  const cultureData = {
    tatarstan: {
      name: 'Татарстан',
      subtitle: 'Земля орнаментов, преданий и древних символов',
      blurb: 'Татарская культура — это переплетение геометрии, музыки, духовных учений и живой памяти о земле.',
      folk: ['Шурале', 'Су анасы', 'Камыр-батыр'],
      idea: 'Татарский орнамент',
      text: 'Старинный символический язык, передающий память о земле, доме и ритуале.',
      mythTitle: 'Шурале',
      mythSub: 'Лесной дух татарского фольклора',
      artImg: './images/93028e24-5412-458a-b96e-45420039c435.webp',
      mythImg: './images/tatar_shurale.jpg',
      heroImg: './images/93028e24-5412-458a-b96e-45420039c435.webp'
    },
    yakutia: {
      name: 'Якутия',
      subtitle: 'Лес, небо и древний эпос',
      blurb: 'Якутская культура хранит особую связь с землёй, рекой и звёздным календарём.',
      folk: ['Нюргун Боотур', 'Олонхо', 'Небо и олень'],
      idea: 'Северный символ',
      text: 'Артефакт из северного мира, связанный с эпосом, ритуалом и природой.',
      mythTitle: 'Нюргун Боотур',
      mythSub: 'Герой якутского эпоса',
      artImg: './images/yakutia_artifact.jpg',
      mythImg: './images/yakutia_myth.jpg',
      heroImg: './images/yakutia_artifact.jpg'
    },
    pomorye: {
      name: 'Поморье',
      subtitle: 'Вышивка, море и северные законы',
      blurb: 'Поморская культура — это северная мудрость, море, хозяйство и особая красота обрядов.',
      folk: ['Поморский узор', 'Северные истории', 'Рыболовный знак'],
      idea: 'Северная вышивка',
      text: 'Узор о том, как человек соотносил себя с морем, зимой и судьбой.',
      mythTitle: 'Морской обряд',
      mythSub: 'Поминальная и праздничная традиция Поморья',
      artImg: './images/pomorye_myth.jpg',
      mythImg: './images/pomorye_myth.jpg',
      heroImg: './images/pomorye_myth.jpg'
    },
    kazakhstan: {
      name: 'Казахстан',
      subtitle: 'Степь, мифы и путь к свету',
      blurb: 'Казахстанская культура включает степные мифы, символы кочевого мира и значение слова как пути.',
      folk: ['Алдар-Косе', 'Степной эпос', 'Песни рода'],
      idea: 'Кочевой символ',
      text: 'Артефакт, передающий связь с историей степи, жертвами и мудростью предков.',
      mythTitle: 'Алдар-Косе',
      mythSub: 'Легендарный герой казахского фольклора',
      artImg: './images/kazakhstan_artifact.jpg',
      mythImg: './images/kazakhstan_myth.jpg',
      heroImg: './images/kazakhstan_artifact.jpg'
    },
    uzbekistan: {
      name: 'Узбекистан',
      subtitle: 'Шёлк, узор и памятник рождения',
      blurb: 'Узбекистанская культура хранит богатство шёлка, ремёсел и ярких образов сказок и легенд.',
      folk: ['Сказки о мудреце', 'Шёлковая нить', 'Герои древних дорог'],
      idea: 'Шёлковый образ',
      text: 'Визуальный след, где культура, ремесло и история становятся одним узором.',
      mythTitle: 'Сказки о дороге',
      mythSub: 'Мифологическая образность Узбекистана',
      artImg: './images/uzbekistan_artifact.jpg',
      mythImg: './images/uzbekistan_myth.jpg',
      heroImg: './images/uzbekistan_artifact.jpg'
    }
  };

  const setScreen = (screenName) => {
    screens.forEach((screen) => {
      const isActive = screen.dataset.screen === screenName;
      screen.classList.toggle('active', isActive);
      screen.style.opacity = isActive ? '1' : '0';
      screen.style.pointerEvents = isActive ? 'auto' : 'none';
      screen.style.transform = isActive ? 'translateX(0)' : 'translateX(18px)';
      screen.style.zIndex = isActive ? '2' : '1';
    });

    const topnavLinks = document.querySelectorAll('.topnav__link');
    topnavLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.go === screenName);
    });
  };

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.hidden = true;
    }, 1800);
  };

  const applyCulture = (cultureKey) => {
    const culture = cultureData[cultureKey];
    if (!culture) return;

    const cultureTitle = document.getElementById('cultureTitle');
    const cultureName = document.getElementById('cultureName');
    const cultureDesc = document.getElementById('cultureDesc');
    const cultureBlurb = document.getElementById('cultureBlurb');
    const cultureFolk = document.getElementById('cultureFolk');
    const cultureHeroImg = document.getElementById('cultureHeroImg');
    const cultureArtImg = document.getElementById('cultureArtImg');
    const cultureArtLabel = document.getElementById('cultureArtLabel');
    const cultureArtTitle = document.getElementById('cultureArtTitle');
    const cultureArtText = document.getElementById('cultureArtText');
    const cultureMythTitle = document.getElementById('cultureMythTitle');
    const cultureMythSub = document.getElementById('cultureMythSub');
    const cultureMythImg = document.getElementById('cultureMythImg');
    const mythImg = document.getElementById('mythImg');
    const mythName = document.getElementById('mythName');
    const mythSub = document.getElementById('mythSub');
    const artTitle = document.getElementById('artTitle');
    const artText = document.getElementById('artText');
    const artImg = document.getElementById('artImg');

    if (cultureTitle) cultureTitle.textContent = culture.name;
    if (cultureName) cultureName.textContent = culture.name;
    if (cultureDesc) cultureDesc.textContent = culture.subtitle;
    if (cultureBlurb) cultureBlurb.textContent = culture.blurb;
    if (cultureHeroImg) cultureHeroImg.src = culture.heroImg;

    if (cultureFolk) {
      cultureFolk.innerHTML = culture.folk.map((item) => `<span class="folk-pill">${item}</span>`).join('');
    }

    if (cultureArtImg) cultureArtImg.src = culture.artImg;
    if (cultureArtLabel) cultureArtLabel.textContent = 'Ты нашел след';
    if (cultureArtTitle) cultureArtTitle.textContent = culture.idea;
    if (cultureArtText) cultureArtText.textContent = culture.text;

    if (cultureMythTitle) cultureMythTitle.textContent = culture.mythTitle;
    if (cultureMythSub) cultureMythSub.textContent = culture.mythSub;
    if (cultureMythImg) cultureMythImg.src = culture.mythImg;

    if (mythImg) mythImg.src = culture.mythImg;
    if (mythName) mythName.textContent = culture.mythTitle;
    if (mythSub) mythSub.textContent = culture.mythSub;

    if (artTitle) artTitle.textContent = culture.idea;
    if (artText) artText.textContent = culture.text;
    if (artImg) artImg.src = culture.artImg;
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-go]');
    if (trigger) {
      const nextScreen = trigger.dataset.go;
      if (nextScreen) {
        event.preventDefault();
        if (trigger.dataset.culture) {
          applyCulture(trigger.dataset.culture);
        }
        setScreen(nextScreen);
      }
    }

    const pin = event.target.closest('.pin');
    if (pin && pin.dataset.pin) {
      const pinCulture = pin.dataset.pin;
      applyCulture(pinCulture);
      if (mapPopup) {
        const popupTitle = document.getElementById('mapPopupTitle');
        const popupText = document.getElementById('mapPopupText');
        if (popupTitle) popupTitle.textContent = cultureData[pinCulture]?.name || 'Культура';
        if (popupText) popupText.textContent = '2 артефакта открыто';
        mapPopup.hidden = false;
      }
    }

    const toastBtn = event.target.closest('[data-toast]');
    if (toastBtn) {
      const text = toastBtn.dataset.toast || 'Готово';
      showToast(text);
    }

    const collectBtn = event.target.closest('[data-collect]');
    if (collectBtn) {
      event.preventDefault();
      showToast('Артефакт добавлен в коллекцию');
    }

    const tabButton = event.target.closest('.tab');
    if (tabButton) {
      document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('is-active', tab === tabButton));
    }

    const mythTabButton = event.target.closest('.myth-tab');
    if (mythTabButton) {
      document.querySelectorAll('.myth-tab').forEach((tab) => tab.classList.toggle('is-active', tab === mythTabButton));
      const mythType = mythTabButton.dataset.myth || 'story';
      const mythBody = document.getElementById('mythBody');
      if (mythBody) {
        const texts = {
          story: 'Шурале — хозяин леса в татарском фольклоре. Это существо хранит тайны дерева, воды и ритуального пространства.',
          facts: 'В татарских преданиях Шурале связан с лесом, скрытыми силами природы и запретами на бесчинство в чужой земле.',
          essence: 'Он символизирует уважение к природе, границы, традицию и чувство предосторожности в лесу.'
        };
        mythBody.innerHTML = `<p>${texts[mythType] || texts.story}</p>`;
      }
    }
  });

  const findBtn = document.getElementById('findBtn');
  const artifactSearch = document.getElementById('artifactSearch');
  if (findBtn && artifactSearch) {
    findBtn.addEventListener('click', () => {
      const value = artifactSearch.value.trim();
      if (!value) {
        showToast('Введите название');
        return;
      }
      showToast(`Найдено: ${value}`);
    });
  }

  const defaultCulture = 'tatarstan';
  applyCulture(defaultCulture);
  setScreen('splash');

  const startBtn = document.querySelector('[data-go="home"]');
  if (startBtn) {
    startBtn.addEventListener('click', () => setScreen('home'));
  }

  const familyCards = document.querySelectorAll('[data-go="family"]');
  familyCards.forEach((card) => {
    card.addEventListener('click', () => setScreen('family'));
  });

  document.querySelectorAll('.culture-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (card.dataset.culture) {
        applyCulture(card.dataset.culture);
      }
    });
  });

  document.querySelectorAll('.pin').forEach((pin) => {
    pin.addEventListener('click', () => {
      const selectedCulture = pin.dataset.pin;
      if (selectedCulture) {
        applyCulture(selectedCulture);
      }
    });
  });
});
