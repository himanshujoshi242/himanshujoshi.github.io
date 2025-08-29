document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
    window.location.href = 'mailto:himanshu.joshi242@gmail.com?subject=' + subject + '&body=' + body;
    status.textContent = 'Opening your email app… If nothing happens, email himanshu.joshi242@gmail.com.';
  });
});