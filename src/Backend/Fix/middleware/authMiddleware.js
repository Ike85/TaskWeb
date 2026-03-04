export default (req, res, next) => {
    req.userId = '123456'; // Mock authentication
    next();
};