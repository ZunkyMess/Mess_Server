const mongoose = require("mongoose");

const MenuSchema = mongoose.model(
  "menuitem",
  new mongoose.Schema({
    day: String,
    breakfast: String,
    lunch: String,
    dinner: String,
  }),
  "menuitem"
);

// Get the weekly menu
module.exports.getMenu = async function () {
  try {
    const menuItems = await MenuSchema.find({}).select({ _id: 0 });
    // console.log(menuItems);
    return menuItems;
  } catch (e) {
    console.log(e);
  }
};

// Set the weekly menu
module.exports.setMenus = async function (menus) {
  await MenuSchema.deleteMany({});
  await MenuSchema.insertMany(menus);
};
