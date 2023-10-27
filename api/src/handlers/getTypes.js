const _getTypes = require('../controllers/_getTypes');


const getTypes = async (req, res) => {
    try {
        const getAllTypes = await _getTypes() 
        
        if(getAllTypes) return res.status(200).json(getAllTypes);
        else return res.status(404).json('No Types found');
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getTypes;