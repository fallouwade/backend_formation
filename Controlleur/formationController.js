const All = require('../model/All.js');


//permet de recupérer
exports.getAll = async (req, res) => {

   await All.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};


//Permet d'ajouter 
exports.createFormation = async (req, res) => {

    const thing = new All({
      ...req.body
    });
   await thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};


//Permet de voir une suel formation
exports.onlyFormation = async (req, res) => {

   await All.findOne({ _id: req.params.id })
    .then(things => res.status(200).json(things))
    .catch(error => res.status(404).json({ error }));
}


//Permet de Modifier une formation
 exports.updateFormation =  (req, res) => {

    All.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
 }


 //Permet de supprimer une formation
 exports.deleteFormation = (req, res)=>{

    All.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
 }



