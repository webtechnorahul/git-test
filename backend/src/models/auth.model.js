const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Password hash karne ke liye

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // Role-based access
}, { timestamps: true });

// Password ko database mein save karne se pehle hash karna
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // 10 salt rounds
  next();
});

module.exports = mongoose.model('User', UserSchema);
