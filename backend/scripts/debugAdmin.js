const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const debugAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    console.log('Connected to MongoDB');

    // Find admin user
    const admin = await User.findOne({ email: 'admin@ecommerce.com' }).select('+password');
    
    if (!admin) {
      console.log('❌ Admin user not found');
      process.exit(0);
    }

    console.log('✅ Admin user found:');
    console.log('📧 Email:', admin.email);
    console.log('👤 Name:', admin.name);
    console.log('🔐 Role:', admin.role);
    console.log('🔑 Password Hash:', admin.password);

    // Test password comparison
    const testPassword = 'admin123';
    const isMatch = await bcrypt.compare(testPassword, admin.password);
    
    console.log('\n🧪 Password Test:');
    console.log('🔤 Test Password:', testPassword);
    console.log('✅ Password Match:', isMatch);

    if (!isMatch) {
      console.log('❌ Password comparison failed. Recreating admin user...');
      
      // Delete existing admin
      await User.deleteOne({ email: 'admin@ecommerce.com' });
      
      // Create new admin with proper hash
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newAdmin = new User({
        name: 'Admin User',
        email: 'admin@ecommerce.com',
        password: hashedPassword,
        role: 'admin'
      });

      await newAdmin.save();
      
      // Test again
      const newAdminUser = await User.findOne({ email: 'admin@ecommerce.com' }).select('+password');
      const newIsMatch = await bcrypt.compare('admin123', newAdminUser.password);
      console.log('✅ New admin password match:', newIsMatch);
    }

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

debugAdmin();
