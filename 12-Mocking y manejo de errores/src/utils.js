import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import passport from 'passport';
import {faker} from '@faker-js/faker';

//// Faker Configuration
export const generateMockProducts =() => {
    let numProductos = 30000;
    let productos=[];
    for(let i=0; i<numProductos ;i++){
        productos.push(generateProduct());
    }
    return productos;
   }
   
   export const generateProduct = () =>{
       return {
           title: faker.commerce.productName(),
           description: faker.commerce.productDescription(),
           category: faker.commerce.productAdjective(),
           price: faker.commerce.price(),
           status: faker.datatype.boolean(),
           thumbnail: faker.image.image(),
           code: faker.datatype.hexadecimal({ length: 10 }),
           id: faker.database.mongodbObjectId()
       }
   }
////////////////////////

export const passportCall = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, function(err, user,info) {
            if (err) return next(err);
            if (!user){
                return res.status(401).send({ error: info.message ? info.message :info.toString() });
            }
            req.user = user;
            next();
        })(req, res, next);
    }
}

export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));
// Irreversible

export const isValidPassword = (user, password) =>bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default __dirname;