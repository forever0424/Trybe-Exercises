const { INVALID } = require('../statusCode');

const validUser = (req, _res, next) => {
	const { username } = req.body;

	if (!username || username.length <= 3) {
    return next({ status: INVALID, message: 'invalid data' });
  }

	next();
};

const validEmail = (req, _res, next) => {
	const { email } = req.body;

	if (!email || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return next({ status: INVALID, message: 'invalid data' });
  }

	next();
};

const validPassword = (req, _res, next) => {
	const { password } = req.body;

	if (!password || !password.match(/^\d+$/) || password.length < 4 || password.length > 8) {
    return next({ status: INVALID, message: 'invalid data' });
  }

	next();
};

const validToken = (req, _res, next) => {
	const { authorization } = req.headers

	if (!authorization || !authorization.match(/^[a-zA-Z0-9]{12}$/)) {
		return next({ status: INVALID, message: 'invalid token' });
	}

	next();
}

const validTeam = (req, _res, next) => {
	const { name, initials, country } = req.body;
	const validName = name && name.length > 5;
	const validInitial = initials && initials.length <= 3 && initials === initials.toUpperCase();
	const validCountry = country && country.length > 3;
	if (!validName || !validInitial || !validCountry) {
		return next({ status: INVALID, message: 'invalid data' })
	}

	next();
}

module.exports = { validUser, validEmail, validPassword, validToken, validTeam };