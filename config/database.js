import { Sequelize }  from 'sequelize';
import 'dotenv/config'; // .env dosyasını kullanabilmek için import ediyoruz


// Veritabanı bağlantısı için gerekli bilgileri ayarlayın
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, // Veritabanı sunucusu adresi
  dialect: 'postgres', // Kullanılan veritabanı türü (örneğin, 'mysql', 'postgres', 'sqlite', 'mssql' vb.)
  port: process.env.DB_PORT, // Veritabanı sunucusu portu
  logging: false, // Sorgu loglarını konsola yazdırmamak için
  underscored: true, // Sütun ve tablo isimlerinde alt çizgi kullanmak için
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
export default sequelize;
