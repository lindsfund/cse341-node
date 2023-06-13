//This is where logic takes place

const testRoute = (req, res) => {
    res.send('test');
}

const lindseyRoute = (req, res) => {
    res.send('Lindsey Fund');
}

const benjaminRoute = (req, res) => {
    res.send('Benjamin Fund');
}

module.exports = {
    testRoute,
    lindseyRoute,
    benjaminRoute,
}