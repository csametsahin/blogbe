import express from 'express';
import  db from './config/database.js'; // Veritabanı bağlantısı için dosyayı import ediyoruz
import  userRoutes from './routes/userRoutes.js' // users route dosyasını import ediyoruz
import  postRoutes from './routes/postRoutes.js' // posts route dosyasını import ediyoruz
import 'dotenv/config'; // .env dosyasını kullanabilmek için import ediyoruz
import cookieParser from 'cookie-parser';

const app = express();

// Diğer yapılandırmalar ve middleware'leri ekleyin
// Veritabanı bağlantısını gerçekleştiriyoruz
db.authenticate()
  .then(() => {
    console.log('Veritabanına başarıyla bağlandı');
  })
  .catch((err) => {
    console.error('Veritabanı bağlantı hatası:', err);
  });
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route dosyalarını kullanmak için middleware olarak ekliyoruz
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Diğer route dosyalarını ve middleware'leri ekleyebilirsiniz

// Sunucuyu başlatıyoruz
app.listen(3000, () => console.log('Sunucu çalışıyor...') );
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})
