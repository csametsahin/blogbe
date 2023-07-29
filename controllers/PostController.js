import  Post  from '../models/Post.js';

// Kullanıcıları çekmek için bir controller fonksiyonu
const getAllPosts = async (req, res) => {
  try {
    // Tüm postları çekmek için findAll() metodu kullanılır
    const posts = await Post.findAll();

    // Postlar başarıyla çekildiğinde cevap döndürür
    res.status(200).json(posts);
  } catch (error) {
    console.log(error)
    // Hata durumunda hata mesajını cevap olarak döndürür
    res.status(500).json({ error: 'Kullanıcılar çekilemedi' });
  }
};

// Diğer controller fonksiyonlarını eklemeyi unutmayın

export { getAllPosts };
