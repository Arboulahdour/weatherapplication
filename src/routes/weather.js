const express = require('express')
const weatherRouter = express.Router()
const axios = require('axios')
require('dotenv').config()

weatherRouter.get('', async(req, res) => {
    
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
    
    var date = day + "-" + month + "-" + year

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Ain Naadja&appid=${process.env.API_KEY}`; 
        const weatherAPI = await axios.get(url)
        res.render('weather', { weather : weatherAPI.data, date: date })
    } catch (err) {
        if(err.response) {
            res.render('weather', { weather : null, date: date })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('weather', { weather : null, date: date })
            console.log(err.request)
        } else {
            res.render('weather', { weather : null, date: date })
            console.error('Error', err.message)
        }
    } 
})


weatherRouter.post('', async(req, res) => {
    
    let search = req.body.search
    
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
    
    var date = day + "-" + month + "-" + year

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}`;  
        const weatherAPI = await axios.get(url)
        res.render('weather', { weather : weatherAPI.data, date: date })
    } catch (err) {
        if(err.response) {
            res.render('weather', { weather : null, date: date })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('weather', { weather : null, date: date })
            console.log(err.request)
        } else {
            res.render('weather', { weather : null, date: date })
            console.error('Error', err.message)
        }
    } 
})

module.exports = weatherRouter 
