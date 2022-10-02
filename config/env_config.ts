const env = process.env.ENV || 'development';
//const env = 'production';

const configEnv = {
  development: {
    api: 'https://api.escuelajs.co/api/v1/',
  },
  production: {
    api: 'https://api.escuelajs.co/api/v1/',
  },
}[env];

export default configEnv;