// blogController.js

const getBlogs = (req, res) => {
    res.send('List of blogs');
};

const getBlogById = (req, res) => {
    const blogId = req.params.id;
    res.send(`Blog with ID ${blogId}`);
};

module.exports = {
    getBlogs,
    getBlogById
};
