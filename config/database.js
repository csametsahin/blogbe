import { Sequelize }  from 'sequelize';

// Veritabanı bağlantısı için gerekli bilgileri ayarlayın
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost', // Veritabanı sunucusu adresi
  dialect: 'postgres', // Kullanılan veritabanı türü (örneğin, 'mysql', 'postgres', 'sqlite', 'mssql' vb.)
  port: 5432, // Veritabanı sunucusu portu
  logging: false, // Sorgu loglarını konsola yazdırmamak için
});

// Veritabanı bağlantısını test ediyoruz
sequelize
  .authenticate()
  .then(() => {
    console.log('Veritabanına başarıyla bağlandı');
  })
  .catch((err) => {
    console.error('Veritabanı bağlantı hatası:', err);
  });

// Model ve tablo oluşturmak için Sequelize nesnesini export ediyoruz
module.exports = sequelize;
