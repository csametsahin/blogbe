// index.js dosyası
import pkg from 'express';
const app = pkg();
const port = 3000; // veya tercih ettiğiniz başka bir port

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!'); // Tarayıcıda "Merhaba Dünya!" yazacak
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
