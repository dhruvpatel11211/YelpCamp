var mongoose = require("mongoose");
const campgrounds = require("./models/campgrounds");
var Campground = require("./models/campgrounds");
var Comment =require("./models/comment");
var data = [
    {
        name: "Clouds Rest",
        image: "https://i.ytimg.com/vi/DzA6vap-Th4/maxresdefault.jpg",
        description: "blah blah blah"
    },
    {
        name: "Maldives",
        image: "https://qtxasset.com/Hotel%20Management-1508949476/mercuremaldiveskoodooresortmaldivesexterior.jpg?zbxIScOeOJEvMU8kcH1pm8g7UG9zZegb",
        description: "blah blah blah"
    },
    {
        name: "Tulum",
        image: "https://lp-cms-production.imgix.net/2019-06/fab6b5f03e66bb144875992631973f01-tulum-ruins.jpg",
        description: "blah blah blah"
    }
];
function seedDB() {
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err)
        }
        console.log("removed campgrounds!");
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("campground added");

                    Comment.create(
                        {
                            text:"Awesome place",
                            author:"dhruv"
                        },
                        function(err,comment){
                            if(err)
                            {
                                console.log(err);
                            }
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;