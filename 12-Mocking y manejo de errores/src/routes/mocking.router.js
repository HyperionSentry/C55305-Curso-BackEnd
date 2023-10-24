import {Router} from "express";
import { generateMockProducts } from '../utils.js';

const router=Router();

router.get('/mockingproducts',async(req,res)=>{
    let prod = generateMockProducts();
    //console.log(prod);
    res.send({status:"success",payload:prod});
})

export default router;