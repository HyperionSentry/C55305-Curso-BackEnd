export default class customError {
    
    static createE({ name="Error",cause,message,code=1, statusCode = 400}){
        const error = new Error(message);
        error.cause=cause;
        error.name=name;
        error.code=code;
        error.statusCode = statusCode;
        throw error
        
    }
}