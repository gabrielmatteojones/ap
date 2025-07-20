(function() {
  // Funzione per caricare e interpretare il file YAML
  fetch('https://ufficiogabrieljones.it/data/settings.yml')
    .then(response => response.text())  // Legge il file YAML come testo
    .then(data => {
      // Usa la libreria js-yaml per convertire YAML in oggetto JavaScript
      const yaml = jsyaml.load(data);

      // Se la modalità manutenzione è attiva
      if (yaml.maintenance_mode) {
        // Redirige alla pagina di avviso configurata
        window.location.replace(yaml.redirect_url);
      }
    })
    .catch(error => console.error('Errore nel controllo manutenzione:', error));
})();
