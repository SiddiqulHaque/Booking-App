const jwt = require("jsonwebtoken");
const { createError } = require("./CreateError");
exports.verifyToken = async (req, res, next) => {
  const token = req.cookie.access_token;
  if (!token) {
    return next(createError(401, "user not authenticated"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token Not Valid"));
    req.user = user;
    next();
  });
};
exports.verifyUser = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "user not Authorised"));
    }
  });
};
exports.verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "user not Authorised"));
    }
  });
};
