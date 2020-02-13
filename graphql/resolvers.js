const ian = {
    name: "Ian",
    age: 21,
    gender: "male"
}

const resolvers = {
    Query: {
        person:() => ian 
    }
}

export default resolvers;