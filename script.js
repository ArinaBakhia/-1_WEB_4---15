// script.js

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  function createSection(title) {
    const sec = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    sec.appendChild(h2);
    return sec;
  }

  // ---------- Задание 1: To-Do List ----------
  (function todoTask() {
    const sec = createSection('Задание 1 - To-Do List');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите задачу...';
    input.style.marginRight = '8px';

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Добавить';
    addBtn.className = 'btn';

    const ul = document.createElement('ul');
    ul.className = 'todo-list';

    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = text;
      // двойной клик — зачёркивание
      span.addEventListener('dblclick', () => {
        if (span.style.textDecoration === 'line-through') {
          span.style.textDecoration = '';
          span.style.opacity = '';
        } else {
          span.style.textDecoration = 'line-through';
          span.style.opacity = '0.6';
        }
      });

      const del = document.createElement('button');
      del.textContent = 'Удалить';
      del.className = 'btn';
      del.addEventListener('click', () => {
        ul.removeChild(li);
      });

      li.appendChild(span);
      li.appendChild(del);
      ul.appendChild(li);
      input.value = '';
      input.focus();
    });

    // Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addBtn.click();
    });

    sec.appendChild(input);
    sec.appendChild(addBtn);
    sec.appendChild(ul);
    root.appendChild(sec);
  })();

  // ---------- Задание 2: Галерея изображений ----------
  (function galleryTask() {
    const sec = createSection('Задание 2 - Галерея изображений');

    // Большое изображение
    const mainImg = document.createElement('img');
    mainImg.className = 'viewer';
    // миниатюры
    const thumbs = [
      'images/гусь.jpg',
      'images/кот.jpg',
      'images/медведь.jpg',
      'images/мышь.jpg'
    ];
    mainImg.src = thumbs[0];

    const thumbsContainer = document.createElement('div');
    thumbsContainer.style.display = 'flex';
    thumbsContainer.style.marginTop = '8px';

    thumbs.forEach((url, i) => {
      const t = document.createElement('img');
      t.src = url;
      t.className = 'thumbnail';
      if (i === 0) t.classList.add('selected');
      t.addEventListener('click', () => {
        mainImg.src = url;
        // выделить выбранную миниатюру
        Array.from(thumbsContainer.children).forEach(ch => ch.classList.remove('selected'));
        t.classList.add('selected');
      });
      thumbsContainer.appendChild(t);
    });

    sec.appendChild(mainImg);
    sec.appendChild(thumbsContainer);
    root.appendChild(sec);
  })();

  // ---------- Задание 3: Аккордеон ----------
(function accordionTask() {
    const sec = createSection('Задание 3 - Раскрывающиеся блоки');
    const container = document.createElement('div');
    container.className = 'accordion';

    const items = [
      { title: 'Блок 1: Введение', text: 'Блеблебле.' },
      { title: 'Блок 2: Основная часть', text: 'Блаблабла.' },
      { title: 'Блок 3: Заключение', text: 'Блюблюблю.' }
    ];

    items.forEach(item => {
      const h3 = document.createElement('h3');
      h3.textContent = item.title;

      const content = document.createElement('div');
      content.className = 'content';
      content.textContent = item.text;

      h3.addEventListener('click', () => {
        // переключаем display между 'none' и 'block'
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });

      container.appendChild(h3);
      container.appendChild(content);
    });

    sec.appendChild(container);
    root.appendChild(sec);
  })();
  // ---------- Задание 4: Динамическая таблица ----------
  (function tableTask() {
    const sec = createSection('Задание 4 - Динамическая таблица');

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Имя';
    nameInput.style.marginRight = '8px';

    const ageInput = document.createElement('input');
    ageInput.placeholder = 'Возраст';
    ageInput.style.width = '80px';
    ageInput.style.marginRight = '8px';

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Добавить';
    addBtn.className = 'btn';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Имя';
    const th2 = document.createElement('th');
    th2.textContent = 'Возраст';

    trHead.appendChild(th1);
    trHead.appendChild(th2);
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    addBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const ageVal = ageInput.value.trim();

      if (name === '') {
        alert('Введите имя.');
        return;
      }

      // Проверка: возраст — число
      const ageNum = Number(ageVal);
      if (ageVal === '' || Number.isNaN(ageNum)) {
        alert('Поле "Возраст" должно содержать число.');
        return;
      }

      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      tdName.textContent = name;
      const tdAge = document.createElement('td');
      tdAge.textContent = ageNum;

      tr.appendChild(tdName);
      tr.appendChild(tdAge);
      tbody.appendChild(tr);

      // Очистить поля
      nameInput.value = '';
      ageInput.value = '';
      nameInput.focus();
    });

    ageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addBtn.click();
    });
    nameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') ageInput.focus(); });

    sec.appendChild(nameInput);
    sec.appendChild(ageInput);
    sec.appendChild(addBtn);
    sec.appendChild(document.createElement('br'));
    sec.appendChild(document.createElement('br'));
    sec.appendChild(table);
    root.appendChild(sec);
  })();

  // ---------- Задание 5: Светофор ----------
  (function trafficLightTask() {
    const sec = createSection('Задание 5 - Светофор');
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '20px';

    // Светофор контейнер
    const traffic = document.createElement('div');
    traffic.className = 'traffic-light';

    const red = document.createElement('div'); red.className = 'light red';
    const yellow = document.createElement('div'); yellow.className = 'light yellow';
    const green = document.createElement('div'); green.className = 'light green';

    traffic.appendChild(red);
    traffic.appendChild(yellow);
    traffic.appendChild(green);

    // Кнопки управления
    const controls = document.createElement('div');
    controls.className = 'controls';

    const nextBtn = document.createElement('button'); nextBtn.textContent = 'Следующий'; nextBtn.className = 'btn';
    const toggleAutoBtn = document.createElement('button'); toggleAutoBtn.textContent = 'Старт автопереключения'; toggleAutoBtn.className = 'btn';

    controls.appendChild(nextBtn);
    controls.appendChild(toggleAutoBtn);

    wrapper.appendChild(traffic);
    wrapper.appendChild(controls);
    sec.appendChild(wrapper);

    // классический цикл переключения светофора
    const states = [
      { r: true, y: false, g: false }, // Red
      { r: false, y: true, g: false }, // Yellow (after red)
      { r: false, y: false, g: true }, // Green
      { r: false, y: true, g: false }  // Yellow (after green)
    ];
    let idx = 0;

    function applyState(state) {
      red.style.background = state.r ? '#d33' : '#777';
      yellow.style.background = state.y ? '#f1c40f' : '#777';
      green.style.background = state.g ? '#2ecc71' : '#777';
    }

    // Изначально все серые
    applyState({ r:false,y:false,g:false });

    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % states.length;
      applyState(states[idx]);
    });

    // Автоматическое переключение
    let intervalId = null;
    function startAuto() {
      if (intervalId) return;
      intervalId = setInterval(() => {
        nextBtn.click();
      }, 3000);
      toggleAutoBtn.textContent = 'Стоп автопереключения';
    }
    function stopAuto() {
      if (!intervalId) return;
      clearInterval(intervalId);
      intervalId = null;
      toggleAutoBtn.textContent = 'Старт автопереключения';
    }

    toggleAutoBtn.addEventListener('click', () => {
      if (intervalId) stopAuto();
      else startAuto();
    });

    // Начнём с красного при первом запуске 
    idx = 0;
    applyState(states[idx]);

    sec.appendChild(document.createElement('br'));
    root.appendChild(sec);
  })();
});

   

