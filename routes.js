const express = require('express');
const mongoose = require('mongoose');
const formationController = require('./Controlleur/formationController.js');
const route = express();

mongoose.connect('mongodb+srv://fallou:5371@cluster0.uodg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

route.use(express.json());

route.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Permet de récupérer toutes les formations
route.get('/api/formation', formationController.getAll);

// Permet de modifier une formation (utiliser PATCH pour une mise à jour partielle)
route.patch('/api/formation/:id', formationController.updateFormation);

// Permet de voir une seule formation
route.get('/api/formation/:id', formationController.onlyFormation);

// Permet de supprimer une seule formation
route.delete('/api/formation/:id', formationController.deleteFormation);

// Permet d'ajouter une nouvelle formation
route.post('/api/formation', formationController.createFormation);

module.exports = route;
