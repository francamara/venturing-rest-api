const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/db')

const movieModel = db.define(
    'Movies',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }

)

module.exports = movieModel


// module.exports = (sequelize, DataTypes) => {
//     const Movie = sequelize.define('Movie', {
//         name: DataTypes.STRING,
//         description: DataTypes.string,
//         year: DataTypes.number,
//         created_at: DataTypes.datetime,
//     });

//     return Movie;
// }

