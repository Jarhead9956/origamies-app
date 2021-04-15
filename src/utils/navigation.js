const getNavigation = (loggedIn, user) => {

    if(loggedIn){
        const authLinks = [
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
                link:`/profile/${user._id}`
            }
        ]

        return authLinks

    }else{
        const guestLinks = [
            {
                title:'Publications',
                link:'/'
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

        return guestLinks
    }
}


export default getNavigation