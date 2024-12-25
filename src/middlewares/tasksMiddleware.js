export const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined){
        return res.status(400).json({message: 'Title is required'});
    };

    if (body.title == ''){
        return res.status(400).json({message: 'Title cannot be empty'});
    };

    next();
};