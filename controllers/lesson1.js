const lindseyRoute = (req,res) => {
    res.send('Lindsey Fund');
};

const benRoute = (req,res) => {
    res.send('Benjamin Fund');
};

const brewerRoute = (req,res) => {
    res.send('Brewer Fund');
};

const roxiRoute = (req,res) => {
    res.send('Roxi Fund');
};

const rileyRoute = (req,res) => {
    res.send('Riley Fund');
};

module.exports = {
    lindseyRoute,
    benRoute,
    brewerRoute,
    roxiRoute,
    rileyRoute,
};