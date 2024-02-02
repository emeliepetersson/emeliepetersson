const contentful = require('contentful');

const spaceKey = process.env.REACT_APP_CONTENTFUL_SPACE;
const accessTokenKey = process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN;

const client = contentful.createClient({
	space: spaceKey,
	accessToken: accessTokenKey
});

export default client;