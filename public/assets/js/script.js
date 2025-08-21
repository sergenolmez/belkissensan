// Global site scripts (header interactive logic now encapsulated inline in Header.astro)
// You can place generic site-wide JS helpers here.
// Example: Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
