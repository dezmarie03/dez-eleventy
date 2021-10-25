(function () {
  let timeout;
  let readingProgressBar = document.createElement('div');
  readingProgressBar.id = 'progress';
  document.body.appendChild(readingProgressBar);
  let max = document.body.scrollHeight - innerHeight;
  readingProgressBar.style.width = `${(scrollY / max) * 100}%`;

  window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      readingProgressBar.style.width = `${(scrollY / max) * 100}%`;
    }, 200);
  });
}());
