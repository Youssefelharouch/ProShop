import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Youssef Elharouch',
    email: 'elharouch@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hassan albos',
    email: 'hassan@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;