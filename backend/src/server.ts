import app from './app';
import database from './database';

database.sync(); //{ force: true }); // "force: true", força a criação da tabela. Usar apenas em desenvolvimento
console.log('Database running at 3306');

app.listen(3000);
console.log('Server running at 3000');
