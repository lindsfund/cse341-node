const lindseyRoute = (req,res) => {
    res.send('Lindsey Fund');
};

const benRoute = (req,res) => {
    res.send('Benjamin Fund');
};

module.exports = {
    lindseyRoute,
    benRoute,
};