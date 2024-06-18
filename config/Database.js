import { Sequelize } from "sequelize";

const db = new Sequelize('projman_db', 'root', 'imroot', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
