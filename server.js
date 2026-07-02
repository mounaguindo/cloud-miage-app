const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
  
app.get('/', (req, res) => { 
  res.send(` 
    <html><body style='font-family:Arial;max-width:600px;margin:50px auto'> 
      <h1>Cloud Computing M1 MIAGE</h1> 
      <h2>Informations de l'environnement PaaS</h2> 
      <table border='1' cellpadding='8'> 
        <tr><td><b>Hostname</b></td><td>${process.env.HOSTNAME || 
'local'}</td></tr> 
        <tr><td><b>Port</b></td><td>${PORT}</td></tr> 
        <tr><td><b>Node version</b></td><td>${process.version}</td></tr> 
        <tr><td><b>Platform</b></td><td>${process.platform}</td></tr> 
        <tr><td><b>Heure serveur</b></td><td>${new 
Date().toISOString()}</td></tr> 
      </table> 
      <p><i>Deploye sur Render.com (PaaS)</i></p> 
    </body></html> 
  `); 
}); 
  
app.get('/health', (req, res) => { 
  res.json({ status: 'OK', uptime: process.uptime() }); 
}); 
  
app.listen(PORT, () => { 
  console.log(`Serveur demarre sur le port ${PORT}`); 
}); 