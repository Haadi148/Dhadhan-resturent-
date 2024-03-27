
import food from "../Models/FoodModel.js";
export const getfoods = async (req, res) => {
  try {
    const foods = await food.find();
    res.status(200).json(foods);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getfoodById = async (req, res) => {
  try {
    const Food = await food.findById(req.params.id);

    if (Food) {
      res.status(200).json(Food);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createfood = async (req, res) => {
  try {
    const {
      name,
      category,
      image,
      description,
      price,
    
    } = req.body;
    const Food = await food.create({
      name,
      category,
      image,
      description,
      price,
   
    });

    if (Food) {
      res.status(201).json(food);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const Updatefood = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      price,
    } = req.body;

    
    const Food = await food.findById(req.params.id);

    if (Food) {
     
      Food.name = name;
      Food.image = image;
      Food.description = description;
      Food.price = price;

    
      const updatedFood = await Food.save();

   
      res.status(200).json(updatedFood);
    } else {
      
      res.status(404).json({ message: "Food not found" });
    }
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
};


 


 export const deletefood = async (req, res) => {
   try {
     const Food = await food.findByIdAndDelete(req.params.id);
 
     if (Food) {
       res.status(200).json({message: "food deleted"});
     }
   } catch (e) {
     res.status(500).json({ error: e.message });
   }
 };
 
