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


const login= async (req, res) => {
  try{
    const {email,password} = req.body;
    await User.findOne({where:{email:email}}).then((user)=>{
      if(!user){
        res.status(400).json({error:'Kullanıcı bulunamadı',message:'Giriş başarısız'});
      }
      else{
        bcryptjs.compare(password,user.password,(err,result)=>{
          result ? res.status(200).json({message:'Giriş Başarılı',user}) : res.status(400).json({error:'Şifre yanlış',message:'Giriş başarısız'});
        })
      }
    })
  }
  catch(error)
  {
    res.status(400).json({error:error.message,message:'Bir hata oluştu'});
  }
};


// Diğer controller fonksiyonlarını eklemeyi unutmayın

export { getAllUsers,registerUser,login };
