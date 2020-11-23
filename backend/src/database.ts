import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const { DB_CONNECTION } = process.env;
//const sequelize = new Sequelize(DB_CONNECTION as string);
const sequelize = new Sequelize('mysql://root:jf0705JF@localhost:3306/pitu');

export default sequelize;
