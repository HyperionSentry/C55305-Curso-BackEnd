import EError from "../../errors/enum.js";
export default (error,req,res,next)=>{
    switch(error.code){
        case EError.INVALID_TYPES_ERROR:
        res.send({status:"error",error:error.name})
        break;
        default:
            res.send({status:"error", error:"Error desconocido"})
    }
}