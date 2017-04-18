let booking = require('../Model/booking');

let bookController = {

    	book:function(req, res){
        let Book = new booking(req.body);

        Book.save(function(err,Book){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(Book);

            }
        })
    }
}

module.exports = bookController;
