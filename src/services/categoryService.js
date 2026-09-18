const CategoryModel = require("../models/categoryModel");

class CategoryService {
  static async getAllCategories() {
    return await CategoryModel.findAll();
  }
}

module.exports = CategoryService;
