const zod = require("zod");

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})
// createTodo is a variable assigned to the result of invoking the zod.object function. This function is used to define a schema for an object. 
// The object passed to zod.object defines the structure of the expected object.
// title and description are keys of the object, and zod.string() is used to specify that
// the values corresponding to these keys should be of type string.
// So, createTodo is a Zod schema that describes an object with two properties: title and description, both of which should be strings. 
// This schema can be used for validating objects to ensure they conform to this structure before being used in your application. 
// It's a way to define and enforce data shapes in a type-safe manner. If an object doesn't match the specified schema,
// Zod will throw a validation error.

const updateTodo = zod.object({
    id : zod.string()

})

module.exports = {
    createTodo,
    updateTodo
}


