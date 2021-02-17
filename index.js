const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./movies.json');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/movies', (req,res) => {
    const {query} = req;
    let newMovies = movies;
    if (query.title){
        console.log('title filter')
        newMovies = newMovies.filter(m => {
            return m.title.toLowerCase().includes(query.title.toLowerCase());
        });
        res.send(newMovies);
    }
    else if (query.rating){
        console.log('rating filter')
        const ratingInt = parseInt(query.rating);
        newMovies = newMovies.filter(m => m = m.rating >= ratingInt)        
         res.send(newMovies); 
    }
});
app.get('./movie/:id', (req,res) =>{
    const {id1} = req.params ;
    console.log('chal rh hu')
    let movie = null;
    movie = movies.find(m => m.id === id1)
    res.send(movie);
});



app.get('/about',(req,res) => {
    res.send('<b>Hi, I am a front end web deevloper & I have created this website.</b>')
});

app.get('/hobbies',(req,res) => {
    res.send('My hobbies are procrastinating and same')
});

app.get('/contact',(req,res) => {
    res.send('Contact me at: mujeeb@gmail.com');
});

app.listen(port, () => {
    console.log('Server started on port 3000')
});