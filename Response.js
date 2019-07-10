var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://yja:YJAtest1@ds345597.mlab.com:45597/registration_dummy_2019');
var Schema = mongoose.Schema;

var responseSchema = new Schema({
  first_name: { type: String, required: true, unique: false },
  middle_name: {type: String, required: false, unique: false},
  last_name: { type: String, required: true, unique: false},
  birthday: { type: String, required: true, unique: false},
  phone: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true},
  address: { type: String, required: true, unique: false },
  city: { type: String, required: true, unique: false},
  state: { type: String, required: true, unique: false},
  zip: { type: Number, required: true, unique: false },
  jain_center: { type: String, required: true, unique: false},
  dietary_preferences: { type: String, required: true, unique: false},
  special_needs: { type: String, required: false, unique: false}
});


responseSchema.statics.addResponse = function (first_name, middle_name, last_name, birthday, phone, email, address, city, state, zip, jain_center, dietary_preferences, special_needs, callbackFunction) {
  var newResponse = new this({ first_name: first_name, middle_name: middle_name, last_name: last_name, birthday: birthday, phone: phone, email: email, address: address, city: city, state: state, zip: zip, jain_center: jain_center, dietary_preferences: dietary_preferences, special_needs: special_needs});
  this.findOne({email: email}, function (err, user) {
      if (!user) {
        newResponse.save(callbackFunction);
      }
      else {
        callbackFunction(err);
      }
  });
}

responseSchema.statics.fetchResponse = function (email, callbackFunction) {
  this.findOne({email: email}, function (err, user) {
      callbackFunction(user);
  });
}

responseSchema.statics.deleteResponse = function (email, callbackFunction) {
  this.deleteOne({email: email}, function(err, user) {
    callbackFunction(user);
  });
}

// responseSchema.statics.editResponse = function (first_name, last_name, birthday, phone, email, address, city, state, zip, jain_center, dietary_preferences, special_needs, callbackFunction) {
//   this.findOneAndUpdate({email: email}, { first_name: first_name, last_name: last_name, birthday: birthday, phone: phone, email: email, address: address, city: city, state: state, zip: zip, jain_center: jain_center, dietary_preferences: dietary_preferences, special_needs: special_needs}, {
//     upsert: true,
//     returnNewDocument: true
//   }, function(err, user) {
//     callbackFunction(user);
//   });
// }

module.exports = db.model('Response', responseSchema);