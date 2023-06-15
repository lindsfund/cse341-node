//This is where logic takes place

const homeRoute = (req, res) => {
    res.send('Homepage');
}

const lindseyRoute = (req, res) => {
    res.send('Lindsey Fund');
}

const benjaminRoute = (req, res) => {
    res.send('Benjamin Fund');
}

module.exports = {
    homeRoute,
    lindseyRoute,
    benjaminRoute,
}