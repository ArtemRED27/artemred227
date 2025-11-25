window.onload = () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
  }, 1500);
};
