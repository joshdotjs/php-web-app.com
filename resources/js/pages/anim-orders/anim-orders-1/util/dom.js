const f = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

// ==============================================

const disableClick = () => {
  document.addEventListener('click', f, true);
}

// ==============================================

const enableClick = () => {
  document.removeEventListener('click', f, true);
}

// ==============================================

export { disableClick, enableClick };