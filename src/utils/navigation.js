const getNavigation = (userId) => {
    const links = [
        {
            title:'Publications',
            link:'/'
        },
    
        {
            title:'Share your thoughts',
            link:'/share'
        },
    
        {
            title:'Profile',
            link:`/profile/${userId}`
        },
    
        {
            title:'Register',
            link:'/register'
        },
    
        {
            title:'Login',
            link:'/login'
        }
    ]

    return links
}


export default getNavigation