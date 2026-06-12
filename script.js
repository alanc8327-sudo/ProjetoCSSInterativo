// Toggle de tema claro/escuro
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') 
    ? "☀️ Modo Claro" 
    : "🌙 Modo Escuro";
});

// Função para atualizar caixas de tamanho
function updateBox(rangeId, boxClass, unit) {
  const range = document.getElementById(rangeId);
  const box = document.querySelector('.' + boxClass);
  range.addEventListener('input', (e) => {
    const value = e.target.value;
    box.style.width = value + unit;
    box.style.height = value + unit;
    box.textContent = value + unit;
  });
}

// Configura cada unidade
updateBox('pxRange', 'px', 'px');
updateBox('emRange', 'em', 'em');
updateBox('remRange', 'rem', 'rem');
updateBox('percentRange', 'percent', '%');
updateBox('vwRange', 'vw', 'vw');
updateBox('vhRange', 'vh', 'vh');
updateBox('chRange', 'ch', 'ch');
updateBox('exRange', 'ex', 'ex');
updateBox('vminRange', 'vmin', 'vmin');
updateBox('vmaxRange', 'vmax', 'vmax');

// Função para atualizar propriedades CSS extras
function updateProperty(rangeId, boxClass, property, label) {
  const range = document.getElementById(rangeId);
  const box = document.querySelector('.' + boxClass);
  range.addEventListener('input', (e) => {
    const value = e.target.value + "px";
    box.style[property] = value;
    box.textContent = `${label}: ${value}`;
  });
}
updateProperty('paddingRange', 'padding', 'padding', 'Padding');
updateProperty('marginRange', 'margin', 'margin', 'Margin');
updateProperty('radiusRange', 'radius', 'borderRadius', 'Radius');

// Gap aplicado em container
const gapRange = document.getElementById('gapRange');
const gapContainer = document.querySelector('.container.gap');
gapRange.addEventListener('input', (e) => {
  const value = e.target.value + "px";
  gapContainer.style.gap = value;
  gapContainer.querySelector('.box').textContent = `Gap: ${value}`;
});

// Função para obter nome da cor automaticamente
function getColorName(hex) {
  const temp = document.createElement("div");
  temp.style.color = hex;
  document.body.appendChild(temp);
  const computed = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  return computed;
}

// Controle de cor em HEX + Nome
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.querySelector('.color-box');
colorPicker.addEventListener('input', (e) => {
  const color = e.target.value; // HEX
  colorBox.style.backgroundColor = color;
  const name = getColorName(color);
  colorBox.textContent = `${color.toUpperCase()} (${name})`;
});

// Botão de reset
const resetBtn = document.getElementById('reset-all');
resetBtn.addEventListener('click', () => {
  // Valores iniciais
  const defaults = {
    pxRange: 100, emRange: 10, remRange: 10, percentRange: 20,
    vwRange: 20, vhRange: 20, chRange: 10, exRange: 10,
    vminRange: 20, vmaxRange: 20,
    paddingRange: 10, marginRange: 10, radiusRange: 10, gapRange: 10,
    colorPicker: "#ff5733"
  };

  // Reset sliders de unidades
  updateBox('pxRange', 'px', 'px'); document.getElementById('pxRange').value = defaults.pxRange;
  document.querySelector('.px').style.width = defaults.pxRange + "px";
  document.querySelector('.px').style.height = defaults.pxRange + "px";
  document.querySelector('.px').textContent = defaults.pxRange + "px";

  updateBox('emRange', 'em', 'em'); document.getElementById('emRange').value = defaults.emRange;
  document.querySelector('.em').style.width = defaults.emRange + "em";
  document.querySelector('.em').style.height = defaults.emRange + "em";
  document.querySelector('.em').textContent = defaults.emRange + "em";

  updateBox('remRange', 'rem', 'rem'); document.getElementById('remRange').value = defaults.remRange;
  document.querySelector('.rem').style.width = defaults.remRange + "rem";
  document.querySelector('.rem').style.height = defaults.remRange + "rem";
  document.querySelector('.rem').textContent = defaults.remRange + "rem";

  updateBox('percentRange', 'percent', '%'); document.getElementById('percentRange').value = defaults.percentRange;
  document.querySelector('.percent').style.width = defaults.percentRange + "%";
  document.querySelector('.percent').style.height = defaults.percentRange + "%";
  document.querySelector('.percent').textContent = defaults.percentRange + "%";

  updateBox('vwRange', 'vw', 'vw'); document.getElementById('vwRange').value = defaults.vwRange;
  document.querySelector('.vw').style.width = defaults.vwRange + "vw";
  document.querySelector('.vw').style.height = defaults.vwRange + "vw";
  document.querySelector('.vw').textContent = defaults.vwRange + "vw";

  updateBox('vhRange', 'vh', 'vh'); document.getElementById('vhRange').value = defaults.vhRange;
  document.querySelector('.vh').style.width = defaults.vhRange + "vh";
  document.querySelector('.vh').style.height = defaults.vhRange + "vh";
  document.querySelector('.vh').textContent = defaults.vhRange + "vh";

  updateBox('chRange', 'ch', 'ch'); document.getElementById('chRange').value = defaults.chRange;
  document.querySelector('.ch').style.width = defaults.chRange + "ch";
  document.querySelector('.ch').style.height = defaults.chRange + "ch";
  document.querySelector('.ch').textContent = defaults.chRange + "ch";

  updateBox('exRange', 'ex', 'ex'); document.getElementById('exRange').value = defaults.exRange;
  document.querySelector('.ex').style.width = defaults.exRange + "ex";
  document.querySelector('.ex').style.height = defaults.exRange + "ex";
  document.querySelector('.ex').textContent = defaults.exRange + "ex";

  updateBox('vminRange', 'vmin', 'vmin'); document.getElementById('vminRange').value = defaults.vminRange;
  document.querySelector('.vmin').style.width = defaults.vminRange + "vmin";
  document.querySelector('.vmin').style.height = defaults.vminRange + "vmin";
  document.querySelector('.vmin').textContent = defaults.vminRange + "vmin";

  updateBox('vmaxRange', 'vmax', 'vmax'); document.getElementById('vmaxRange').value = defaults.vmaxRange;
  document.querySelector('.vmax').style.width = defaults.vmaxRange + "vmax";
  document.querySelector('.vmax').style.height = defaults.vmaxRange + "vmax";
  document.querySelector('.vmax').textContent = defaults.vmaxRange + "vmax";

  // Reset propriedades
  document.getElementById('paddingRange').value = defaults.paddingRange;
  document.querySelector('.padding').style.padding = defaults.paddingRange + "px";
  document.querySelector('.padding').textContent = "Padding: " + defaults.paddingRange + "px";

  document.getElementById('marginRange').value = defaults.marginRange;
  document.querySelector('.margin').style.margin = defaults.marginRange + "px";
  document.querySelector('.margin').textContent = "Margin: " + defaults.marginRange + "px";

  document.getElementById('radiusRange').value = defaults.radiusRange;
  document.querySelector('.radius').style.borderRadius = defaults.radiusRange + "px";
  document.querySelector('.radius').textContent = "Radius: " + defaults.radiusRange + "px";

  document.getElementById('gapRange').value = defaults.gapRange;
  gapContainer.style.gap = defaults.gapRange + "px";
  gapContainer.querySelector('.box').textContent = "Gap: " + defaults.gapRange + "px";

  // Reset cor
  colorPicker.value = defaults.colorPicker;
  colorBox.style.backgroundColor = defaults.colorPicker;
  const name = getColorName(defaults.colorPicker);
  colorBox.textContent = `${defaults.colorPicker.toUpperCase()} (${name})`;
});
