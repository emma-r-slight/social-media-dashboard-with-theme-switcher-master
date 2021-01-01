const toggle = document.getElementById('myToggle')

function darkMode() {
  if (toggle.checked == true) {
    document.documentElement.setAttribute('color-mode', 'light')
    localStorage.setItem('color-mode', 'light')
    return
  }
  document.documentElement.setAttribute('color-mode', 'dark')
  localStorage.setItem('color-mode', 'dark')
}

toggle.addEventListener('click', darkMode)
