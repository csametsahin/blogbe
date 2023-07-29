import { User } from '../models/User';

// Kullanıcıları çekmek için bir controller fonksiyonu
const getAllUsers = async (req, res) => {
  try {
    // Tüm kullanıcıları çekmek için findAll() metodu kullanılır
    const users = await User.findAll();

    // Kullanıcılar başarıyla çekildiğinde cevap döndürür
    res.status(200).json(users);
  } catch (error) {
    // Hata durumunda hata mesajını cevap olarak döndürür
    res.status(500).json({ error: 'Kullanıcılar çekilemedi' });
  }
};

// Diğer controller fonksiyonlarını eklemeyi unutmayın

module.exports = { getAllUsers };
