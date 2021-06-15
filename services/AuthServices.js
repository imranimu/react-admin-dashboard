import CookieService from './CookieServices';

class AuthServices{

    constructor(){

        const token = CookieService.get('token');

        (token) ? this.authenticated = true : this.authenticated = false;

        this.token = token;
    }

    isAuthenticated(){
        return this.authenticated; 
    }

    isAdmin(){
        let user = CookieService.get('user');
        if(user){
            return (this.authenticated && user.role === "admin") ? true : false;
        }else{
            return false;
        }
        
    }

    isVendor(){
        let user = CookieService.get('user');
        return (this.authenticated && user.role === "vendor") ? true : false; 
    }

    getAccessToken(){
        return  CookieService.get('token');
    }
    
    getUser(){
        return  CookieService.get('user');
    }


}

export default new AuthServices();