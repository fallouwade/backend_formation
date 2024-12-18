const mongoose = require('mongoose');

const FormationSchema =  mongoose.Schema({
  nomFormation: {
    type: String,
    required: true,
  },
  dateAjout: {
    type: Date,
    default: Date.now, // La date actuelle est définie par défaut
  },
  dateFormation: {
    type: Date,
    required: true,
  },
  nombreUtilisation: {
    type: Number,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  thematique: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
    default: 'https://via.placeholder.com/400x200', // URL par défaut si aucune image n'est fournie
  },
  dateModif: {
    type: Date,
    default: null, // Ce champ sera mis à jour lors d'une modification
  },
});

module.exports = mongoose.model('Formation', FormationSchema);
