import express from 'express';
import  db from './config/database.js'; // Veritabanı bağlantısı için dosyayı import ediyoruz
import  userRoutes from './routes/userRoutes.js' // users route dosyasını import ediyoruz
import 'dotenv/config'; // .env dosyasını kullanabilmek için import ediyoruz
const app = express();

// Diğer yapılandırmalar ve middleware'leri ekleyin
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
// Veritabanı bağlantısını gerçekleştiriyoruz
db.authenticate()
  .then(() => {
    console.log('Veritabanına başarıyla bağlandı');
  })
  .catch((err) => {
    console.error('Veritabanı bağlantı hatası:', err);
  });

// Route dosyalarını kullanmak için middleware olarak ekliyoruz
app.use('/users', userRoutes);

// Diğer route dosyalarını ve middleware'leri ekleyebilirsiniz

// Sunucuyu başlatıyoruz
app.listen(3000, () => console.log('Sunucu çalışıyor...'));
