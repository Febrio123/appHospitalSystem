const express = require('express')
// const bodyParser = require('body-parser')
const ejsMate = require('ejs-mate')
const path = require('path');
// const cors = require('cors')
const dotenv = require('dotenv')
// const mongoose = require('mongoose')
const app = express()
// const rolesRoutes = require('./routes/roleRoutes')
// const userRoutes = require('./routes/authRoutes')
const { isLoggedIn } = require('./middleware/authMiddleware')
// const { errorHandler, notFound } = require('./middleware/errorMiddleware')


// view engine
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// static files
app.use('/public' ,express.static(path.join(__dirname, 'public')))

// middleware
// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/api', rolesRoutes)
// app.use('/api', userRoutes)

// app.use(notFound)
// app.use(errorHandler)


// dotenv.config()
// mongoose.connect(process.env.DATABASE, {
// }).then(() => {
//     console.log("Database connect")
// })


const navLink= [
    { icon: 'fa-solid fa-calendar-days', text: 'Penjadwalan', link: '/penjadwalan' },
    { icon: 'fa-solid fa-notes-medical', text: 'Riwayat Pasien', link: '/riwayatPasien' },
    { icon: 'fa-solid fa-flask-vial', text: 'Hasil Lab', link: '/hasilLab' },
    {icon: 'fa-solid fa-pills', text:'Medikasi', link: '/medikasi'},
    {icon: 'fa-solid fa-money-bill-wave',text:'Tagihan & Pembayaran', link: '/tagihanPembayaran'},
    { icon: 'fa-solid fa-power-off', text: 'Logout', isLogout: true }
  ];


app.get('/login',(req, res) => {
    res.render('login')

})

app.get('/penjadwalan', isLoggedIn,(req, res) => {
    const data = {
        "title": "Penjadwalan",
        "navLink": [navLink[0], navLink[4], navLink[5]]
    }

    console.log(navLink);
    res.render('penjadwalan', {data})
})

app.get('/riwayatPasien', isLoggedIn, (req, res) => {
    const data = {
        "title" : "Riwayat Pasien",
        "navLink": navLink

    }
    res.render('riwayat', {data})
})

app.get('/medikasi', isLoggedIn,(req, res) => {
    const data = {
        "title" : "Medikasi",
        "navLink": navLink

    }
    res.render('medikasi', {data})
})

app.get('/hasilLab', isLoggedIn, (req, res) => {
    const data = {
        "title" : "Hasil Lab",
        "navLink": navLink

    }
    res.render('hasilLab', {data})
})

app.get('/tagihanPembayaran', isLoggedIn, (req, res) => {
    const data = {
        "title" : "Tagihan & Pembayaran",
        "navLink": navLink

    }
    res.render('tagihanPembayaran', {data})
})



app.listen(process.env.PORT || 7000, () => {
    console.log(`Server running on http://localhost:7000/`)
})