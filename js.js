(function() {
  // Recupera il file JSON generato da Decap CMS
  fetch('https://ufficiogabrieljones.it/config.json')
    .then(response => response.json())
    .then(data => {
      // Se la modalità manutenzione è attiva
      if (data.maintenance_mode) {
        // Esegui il reindirizzamento
        window.location.replace(data.redirect_url);
      }
    })
    .catch(error => console.error('Errore nel caricare la configurazione:', error));
})();
