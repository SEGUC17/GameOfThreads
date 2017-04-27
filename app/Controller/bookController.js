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
        getAllbookings:function(req, res){

        booking.find(function(err, bookings){

            if(err)
                res.send(err.message);
            else
                console.log(bookings);

        })
    },
    }
}

module.exports = bookController;
