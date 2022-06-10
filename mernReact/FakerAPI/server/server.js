const express =  require("express");
const app = express();
const PORT = 8000;
const { faker } = require('@faker-js/faker');
//------MIDDLEWARE------
app.use(express.json(), express.urlencoded({extended:true}));

class User{
    constructor(){
        this.password = faker.internet.password();    
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.id= faker.datatype.number();
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),            
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),            
        }  
    }
}

app.get("/api/user/new",(req, res) => {
    const newUser = new User();
    res.json(newUser);    
});
app.get("/api/companies/new",(req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});
app.get("/api/user/company",(req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({user: newUser ,company: newCompany})
});



// always is at the end of the  file
// starts the server
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}!!!!!`);
})