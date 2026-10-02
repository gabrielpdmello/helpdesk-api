const CategoryService = require("../services/categoryService");

class CategoryController {
  static async getAll(req, res) {
    const categories = await CategoryService.getAllCategories();
    return res.status(200).json(categories);
  }
}

module.exports = CategoryController;
