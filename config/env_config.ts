const env = process.env.ENV || 'development';
//const env = 'production';

const configEnv = {
  development: {
    api: 'https://fakestoreapi.com/',
  },
  production: {
    api: 'https://fakestoreapi.com/',
  },
}[env];

export default configEnv;