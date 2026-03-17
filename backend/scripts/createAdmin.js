const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    console.log('Connected to MongoDB');

    // Delete existing admin if exists
    await User.deleteOne({ email: 'admin@ecommerce.com' });

    // Create admin user with proper schema
    const admin = new User({
      name: 'Admin User',
      email: 'admin@ecommerce.com',
      password: 'admin123', // Let the schema pre-save hook handle hashing
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@ecommerce.com');
    console.log('🔑 Password: admin123');
    console.log('\n🔐 Please change the password after first login for security.');

    // Verify the admin was created correctly
    const testAdmin = await User.findOne({ email: 'admin@ecommerce.com' }).select('+password');
    const isMatch = await bcrypt.compare('admin123', testAdmin.password);
    console.log('🧪 Password verification:', isMatch ? '✅ PASS' : '❌ FAIL');

  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

createAdmin();
