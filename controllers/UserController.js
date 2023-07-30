import  User  from '../models/User.js';
import bcryptjs from 'bcryptjs';

// Kullanıcıları çekmek için bir controller fonksiyonu
const getAllUsers = async (req, res) => {
  try {
    // Tüm kullanıcıları çekmek için findAll() metodu kullanılır
    const users = await User.findAll();

    // Kullanıcılar başarıyla çekildiğinde cevap döndürür
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    // Hata durumunda hata mesajını cevap olarak döndürür
    res.status(500).json({ error: 'Kullanıcılar çekilemedi' });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, surname, email, password, role } = req.body;
    bcryptjs.hash(password, 10, async (err, hash) => {
      if (err) {
        res.status(500).json({ error: 'Şifre hashlenirken hata oluştu' });
      } else {
         await User.create({
          name,
          surname,
          email,
          password: hash,
          role,
        }).then((user) => {
          res.status(200).json(user);
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Kullanıcı oluşturulamadı' });
  }
};



// Diğer controller fonksiyonlarını eklemeyi unutmayın

export { getAllUsers,registerUser };
