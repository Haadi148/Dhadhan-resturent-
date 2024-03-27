import Users from "../Models/UserModels.js"

export const getUsers = async(req, res)=>{
 try{
    const users = await Users.find(); 
    res.status(200).json(users);
 }catch(e){
    res.status(500).json({error:e.message});
 }
};

export const getUserByI = async(req, res)=>{
    try{
       const User = await Users.findById(req.params.id) 
       res.status(200).json(User)
    }catch(e){
       res.status(500).json({error:e.message})
    }
   };

   export const login = async(req, res)=>{
    try{

        const { email, password} = req.body
        const User = await Users.findOne({email})
        if (user){
            if (user.password == password){
                res.status(200).json(User)
            }else{
                res.status(400).json({massage: "wrong password"})
            }

        }else( res.status(400).json({massage: "user not found "}))

    
      
    }catch(e){
       res.status(500).json({error:e.message})
    }
   };

   export const createUser = async(req, res)=>{
    try{
      const { name, email, password, phone, address} = req.body

      const isUserExists = await Users.findOne({email})

      if (isUserExists){
        res.status(400).json({massage: "users already exists"})
      }else {
        const user = await Users.create({
            name, email, password, phone, address
        })
        res.status(200).json(user)
      }

       
    }catch(e){
       res.status(500).json({error:e.message})
    }
   };

   export const UpdateUser = async(req, res)=>{
    try{
      const { name, email, password, phone, address} = req.body

      const User = await Users.findById(req.params.id)

      if(User) {
       User.name = name;
       User.email = email;
       User.password = password;
       User.phone= phone;
       User.address = address;

       const updatedUsers = await User.save()

       res.status(200).json(updatedUsers)
       
      
      }

    }catch(e){
       res.status(500).json({error:e.message})
    }
   };

   export const deleteUser = async (req, res) => {
      try {
        const User = await  Users.findByIdAndDelete(req.params.id);
    
        if (User) {
          res.status(200).json({message: "User deleted"});
        }
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    };

