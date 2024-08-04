import { Sequelize } from 'sequelize-typescript';
import { Medicine, Patient } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'bz3w9hjwqn5jozcgqys0-mysql.services.clever-cloud.com',
    username: 'u3auuaaeofezcfl4',
    password: 'U9zTur2j6FoszKqRNTFk',
    database: 'bz3w9hjwqn5jozcgqys0',
    models: [Medicine, Patient],
});

export default sequelize;