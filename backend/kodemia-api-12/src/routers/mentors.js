const express = require('express');
const mentors = require('../usecases/mentors');
const router = express.Router();

router.get('/', async ( request, response ) =>{
    try{
        const allMentors = await mentors.getAll();
        response.json({
            success: true,
            message: "All mentors return",
            data: {
                mentors: allMentors
            }
        })
    }
    catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at get all mentors',
            error: error.message
        })
    }
})

router.post('/', async ( request, response ) => {
    try {
        const mentorsData = request.body;
        const mentorCreated = await mentors.create( mentorsData );
        response.json({
            success:true,
            message: 'Mentor created',
            data: {
                Mentor: mentorCreated
            }
        })
    } 
    catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at create mentor',
            error: error.message
        })
    }
})

router.delete('/:id', async ( request, response ) => {
    try {
        const { id } = request.params;
        const mentorDeleted = await mentors.deleteById(id);
        response.json({
            success: true,
            message: 'Mentor deleted',
            data: {
                Mentor: mentorDeleted
            }
        })
    } 
    catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at delete mentor',
            error: error.message
        })
    }
})

router.patch('/:id', async ( request, response ) => {
    try {
        const { id } = request.params;
        const { body: mentorData } = request;
        const mentorUpdated = await mentors.updateById( id, mentorData );
        
        response.json({
            success: true,
            message: 'mentor Updated',
            data: {
                mentor: mentorUpdated
            }
        })
    } 
    catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at update mentor',
            error: error.message
        })
    }
})

router.get('/:id', async ( request, response ) => {
    try {
        const { id } = request.params;
        const mentorById = await mentors.showMentorById(id);
        response.json({
            success: true,
            message: 'Mentor by Id',
            data: {
                Mentor: mentorById
            }
        })
    } 
    catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at Show Mentor By Id ',
            error: error.message
        })
    }
})


module.exports = router;
