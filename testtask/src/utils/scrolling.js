export function scrollToSection(section) {
  const targetElement = document.getElementById(section);
  const { top, left } = targetElement.getBoundingClientRect(); //get position on screen
  window.scrollTo({
    top: top + window.scrollY - 20,
    left: left + window.scrollX,
    behavior: 'smooth',
  });
}
