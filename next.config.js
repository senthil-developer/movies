/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "image.tmdb.org" , "img.youtube.com"
        ]
    },
    compiler:{
        styledComponents:true
    },
}

module.exports = nextConfig
