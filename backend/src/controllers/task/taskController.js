import asyncHandler from 'express-async-handler';

export const createTask = asyncHandler(async (req, res) => {
    try {
        const{title, description, dueDate, status, priority} = req.body;

        if(!title || title.trim()===""){
            res.status(400).json({message: "Title is required"});
        }

        if(!description || description.trim()===""){
            res.status(400).json({message: "Description is required"});
        }

        const task = new taskModel({}); //latest 12.3.25

    } catch (error) {
        
    }
});