//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

btn.addEventListener('click', () => {
  // Get the index of the selected color
  const selectedIndex = colorSelect.selectedIndex;

  // Remove the selected color if any option is selected
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});
