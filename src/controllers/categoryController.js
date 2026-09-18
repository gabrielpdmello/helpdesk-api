const CategoryService = require("../services/categoryService");

class CategoryController {
  static async getAll(req, res) {
    try {
      const categories = await CategoryService.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CategoryController;
