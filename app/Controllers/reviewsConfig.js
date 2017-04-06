let Review = require('../Model/review');


let reviewController = {

    writeReview:function(req, res){
        let review = new Review(req.body);

        review.save(function(err, review){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                res.redirect('/profileCust');
                console.log(review);
                console.log("review posted");
} })

} 
}

module.exports = reviewController;
