const { Service } = require('feathers-mongodb');

exports.Users = class Users extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('users');
    });
  }
};

// const UserService = {
//   async find(params) {
//     return [];
//   },
//   async get(id, params) {},
//   async create(data, params) {

//   },
//   async update(id, data, params) {},
//   async patch(id, data, params) {},
//   async remove(id, params) {},
//   setup(app, path) {}
// }

// exports.Users = UserService