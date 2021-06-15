import Cookies from 'universal-cookie';

const cookies = new Cookies();

const PREFIX = 'lcta_';

class CookieService {

    get(key){

        return cookies.get(PREFIX + key);
    }

    set(key, value, options ){

        return cookies.set(PREFIX +key, value, options);

    }

    remove(key){

        return cookies.remove(PREFIX +key);

    }

}

export default new CookieService();