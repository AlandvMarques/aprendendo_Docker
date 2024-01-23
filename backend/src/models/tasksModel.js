/* eslint-disable indent */
const connection = ('./connection');

const getALl = async() => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

module.exports ={ 
    getALl
};