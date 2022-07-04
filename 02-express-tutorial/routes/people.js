const express = require('express')
const router = express.Router()

const{
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/postman', createPersonPostman)
// router.post('/', createPerson)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)//is createPerson basically the response to the request?
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)



module.exports = router