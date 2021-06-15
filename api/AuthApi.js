import CookieService from '../services/CookieServices';
import AxiosServices from '../services/AxiosServices';

const expiredAt = 60*24*60*1000;

class AuthApi {

    async doLogin(credentials){

        if(this.validate(credentials)){

            const loginURL = "/auth/login";

            try{
    
                const response =  await AxiosServices.post(loginURL, credentials);

                if(response.data.error === false){

                    this.onLoginSuccess(response.data, credentials.remember);

                }
    
                return response.data;
    
            }catch(error){
                return error.response.data;
            }    
        }
        return {'error': true, 'message': "Invalid Input"};
    }

    validate = (credentials) => {
        if (credentials.email && credentials.password) { 
            return true
        }
        return false;
    }

    onLoginSuccess = (data, remember) => {

        let options = { path : '/', sameSite: 'lax'}

        if(remember){
            let date = new Date();
            date.setTime(date.getTime() + expiredAt);
            options.expires =  date;
        }    

        CookieService.set('token', data.results.access_token, options);

        let user = {
            'name': data.results.name,
            'role': data.results.role,
            'avatar': data.results.avatar
        };

        CookieService.set('user', JSON.stringify(user), options);
        
        return true;

    }

    async doLogOut(){

        const logoutURL = "/auth/logout";

        this.onLogoutSuccess();

        try{
    
            const response =  await AxiosServices.post(logoutURL);

            if(response.data.error === false){
                this.onLogoutSuccess();
            }

            return response.data;

        }catch(error){
            return error.response.data;
        } 

    }

    onLogoutSuccess = () => {

        let options = { path : '/', sameSite: 'lax'}

        CookieService.remove('token'); 

        let user = {
            'name': '',
            'role': '',
            'avatar': ''
        };

        CookieService.set('user', JSON.stringify(user), options);

    }


}

export default new AuthApi();