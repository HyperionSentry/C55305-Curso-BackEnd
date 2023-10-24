export const generateUserErrorInfo =(item)=>{
    let respuesta = `Los siguientes campos no estan completos: `
    if(!item.title){respuesta = respuesta + `title, `}
    if(!item.description){respuesta = respuesta + `description, `}
    if(!item.category){respuesta = respuesta + `category, `}
    if(!item.price){respuesta = respuesta + `price, `}
    if(!item.status){respuesta = respuesta + `status, `}
    if(!item.thumbnail){respuesta = respuesta + `thumbnail, `}
    if(!item.code){respuesta = respuesta + `code, `}
    if(!item.stock){respuesta = respuesta + `stock,`}
    return respuesta
}