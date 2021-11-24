export const BaseConfig = {

    api:{
        debug:{
            user: 'https://localhost:44308/api',
        },
        user: url => `${BaseConfig.api.debug.user}${url}`,
    },
    service:{
        user:{},
        item:{}
    },
    utilities:{
        getAuthorizedHeader: () => {
            const token = localStorage.getItem('token');
            return token ? {'Content-type':'application/json',
                            'Authorization': `Bearer ${token}`} :
                            {'Content-type':'application/json'};
        },
    },
};