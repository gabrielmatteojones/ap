---
layout: page
title: GREST
date: 2025-07-17T10:15:00.000+02:00
permalink: /grest/
---
```
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <div id="content" style="display:none;">
    <h1>Benvenuto nella pagina privata!</h1>
    <p>Solo utenti loggati possono vedere questo contenuto.</p>
    <button id="logout-btn">Logout</button>
  </div>

  <script>
    const netlifyIdentity = window.netlifyIdentity;

    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginArea = document.getElementById('login-area');
    const content = document.getElementById('content');

    function updateUI(user) {
      if (user) {
        loginArea.style.display = 'none';
        content.style.display = 'block';
      } else {
        loginArea.style.display = 'block';
        content.style.display = 'none';
      }
    }

    netlifyIdentity.on('init', user => updateUI(user));
    netlifyIdentity.on('login', user => {
      updateUI(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on('logout', () => updateUI(null));

    loginBtn.addEventListener('click', () => netlifyIdentity.open('login'));
    logoutBtn.addEventListener('click', () => netlifyIdentity.logout());

    netlifyIdentity.init();
  </script>
```
