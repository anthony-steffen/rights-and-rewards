# Para liberar permissão de execução: chmod +x automate_db.sh

npx sequelize db:drop
npx sequelize db:create
npx sequelize db:migrate