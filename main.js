const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.image-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    
    galleryItems.forEach(item => {
      if (item.classList.contains(filter) || filter === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
