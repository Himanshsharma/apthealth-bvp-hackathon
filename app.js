var express=require("express")
var app=express()
app.set('view engine','ejs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var session = require('express-session')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1160000 } }))
app.use('/Newfolder',express.static('Newfolder'));





const _ = require("lodash")

var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const userSchema = new Schema({
    email: String,  
    password: String
});
const userModel = mongoose.model("Us",userSchema)
const formschema=new Schema({
    disease:String,
    user:ObjectId,
})
const formmodel=mongoose.model("form",formschema)
app.get('/',(req,res)=>{
    res.render("index")
})
const checkLogIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login')
    }
}
app.get('/user/login', (req, res) => {
    res.render('login')
})

app.post('/user/login', urlencodedParser, (req, res) => {
    switch (req.body.action) {
        case 'signup':
            userModel.findOne({ email: req.body.email }, function (err, doc) {
                if (err) {
                    console.log(err, 'error')
                    res.redirect('/')
                    return
                }
                if (_.isEmpty(doc)) {
                    let newUser = new userModel();
                    newUser.firstname=req.body.firstname;
                    newUser.lastname=req.body.lastname;
                    newUser.email = req.body.email;
                    newUser.password = req.body.password;
                    newUser.save(function (err) {
                        if (err) {
                            console.log(err, 'error')
                            return
                        }
                        res.render('login', { message: "Sign Up Successful. Please log in." })
                    });

                } else {
                    res.render('login', { message: "User already exists" })
                }
            })
            break;
        case 'login':
            userModel.findOne({ email: req.body.email, password: req.body.password }, function (err, doc) {
                if (err) {
                    console.log(err, 'error')
                    res.redirect('/')
                    return
                }
                if (_.isEmpty(doc)) {
                    res.render('login', { message: "Please check email/password" })
                } else {
                    req.session.user = doc
                    res.redirect('/user/form')
                }
            })
            break;
    }

})
app.get('/user/form',(req,res)=>{
    res.render("form")

})
app.get("/user/dass",call)
function call(req, res) {
    console.log(90)
     
    var spawn = require("child_process").spawn; 
        var process = spawn('python',["./code.py",
        req.query.a1,
    req.query.a2,
    req.query.a3,
    req.query.a4,
    req.query.a5,
    req.query.a6 ,
    req.query.a7,req.query.a8,req.query.a9,req.query.a10,
    req.query.a11,
    req.query.a12,
    req.query.a13,
    req.query.a14,
    req.query.a15,
    req.query.a16,
    req.query.a17,
    req.query.a18,
    req.query.a19,
    req.query.a20,
    req.query.a21,
    req.query.a22,
    req.query.a23,
    req.query.a24,
    req.query.a25,
    req.query.a26,
    req.query.a27,
    req.query.a28,
    req.query.a29,req.query.a30,
    req.query.a31,
    req.query.a32,
    req.query.a33,
    req.query.a34,
    req.query.a35,
    req.query.a36,
    req.query.a37,
    req.query.a38,
    req.query.a39,
    req.query.a40,
    req.query.a41,
    req.query.a42,
    req.query.a43,req.query.a44,
    req.query.a45,
    req.query.a46,
    req.query.a47,
    req.query.a48,
    req.query.a49,
    req.query.a50,
    req.query.a51,
    req.query.a52,
    req.query.a53,
    req.query.a54,
    req.query.a55,
    req.query.a56,
    req.query.a57,req.query.a58,
    req.query.a59,
    req.query.a60,
    req.query.a61,
    req.query.a62,
    req.query.a63,
    req.query.a64,
    req.query.a65,
    req.query.a66,
    req.query.a67,
    req.query.a68,
    req.query.a69,
    req.query.a70,
    req.query.a71,req.query.a72,
    req.query.a73,
    req.query.a74,
    req.query.a75,
    req.query.a76,
    req.query.a77,
    req.query.a78,
    req.query.a79,
    req.query.a80,
    req.query.a81,
    req.query.a82,
    req.query.a83,
    req.query.a84,
    req.query.a85,req.query.a86,
    req.query.a87,
    req.query.a88,
    req.query.a89,
    req.query.a90,
    req.query.a91,
    req.query.a92,
    req.query.a93,
    req.query.a94,
    req.query.a95,
    req.query.a96,
    req.query.a97,
    req.query.a98,
    req.query.a99,req.query.a100,
    req.query.a101,
    req.query.a102,
    req.query.a103,
    req.query.a104,
    req.query.a105,
    req.query.a106,
    req.query.a107,
    req.query.a108,
    req.query.a109,
    req.query.a110,
    req.query.a111,
    req.query.a112,
    req.query.a113,req.query.a114,
    req.query.a115,
    req.query.a116,
    req.query.a117,
    req.query.a118,
    req.query.a119,
    req.query.a120,
    req.query.a121,
    req.query.a122,
    req.query.a123,
    req.query.a124,
    req.query.a125,
    req.query.a126,
    req.query.a127,
    req.query.a128,
    req.query.a129,
    req.query.a130,
    req.query.a131,
    req.query.a132,
    req.query.a132,
    req.query.a133  
                            
                           ] ); 
     
    process.stdout.on('data', function(data) { 
        
        res.render("jj",{ad:data})
        
        
    }) 
}



app.listen(9899)
