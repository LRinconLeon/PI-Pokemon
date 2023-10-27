const { Type } = require('../db');
const axios = require('axios');

const _getTypes = async () => {
    const DBTypeVerification = await Type.findAll();

    if(DBTypeVerification.length) return DBTypeVerification;
    else {
        const APIType = await axios.get('https://pokeapi.co/api/v2/type');
        const data = APIType.data.results;

        const addingTypes = data.map((type) => { return { name: type.name } });
        await Type.bulkCreate(addingTypes);

        return await Type.findAll();
    }

};

module.exports = _getTypes;
