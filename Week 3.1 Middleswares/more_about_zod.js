const express = require("express");
const zod = require("zod");
const app = express();
const port = 8080;
app.use(express.json())
app.post('/login', (req, res) => {
    const obje = req.body;
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
    })
// zod.object({...}): This is a function provided by Zod to create an object schema. It takes an object where keys are the names of the properties in the schema,
// and values are the Zod schema types for those properties.
// email: zod.string(): Specifies that the value of the "email" property should be a string.email(): Further refines the string constraint to ensure that it is a valid email address"
// password:zod.string(): Specifies that the value of the "password" property should be a string..min(8): Requires that the string has a minimum length of 8 characters.
// So, the schema object is a Zod schema that represents an object with two properties:
// email: A string that must be a valid email address. password: A string that must be at least 8 characters long.
    const response = schema.safeParse(obje);
//safeParse:This is a method provided by Zod for parsing and validating data against a schema.Unlike parse,which throws an exception on failure,safeParse returns a result object.
// response will contain an object like { success: true (or false), data: /* validated data */ }.
    if(!response.success){
        res.json({
            msg : "Please enter valid details"
        })
    }else{
        res.json({
            response
        })
    }
})
app.listen(port, () =>{
    console.log(`listening on ${port}`);
})