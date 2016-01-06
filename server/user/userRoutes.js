var userController = require('./userController.js');

module.exports = function (app) {
  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.post('/signedin', userController.checkAuth);
  app.get('/meals', userController.getSavedMeals);
  app.post('/meals', userController.saveMeal);
  app.post('/preferences', userController.saveDietPreferences);
  app.get('/preferences', userController.getDietPreferences);
};
