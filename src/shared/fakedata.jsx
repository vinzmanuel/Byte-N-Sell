import {faker} from '@faker-js/faker'

function createRandomCarList(){

    const conditions = ["Brand New", "Like New", "Lightly Used", "Well Used"]; // List of car conditions
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]; // Randomly pick a condition
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://media.karousell.com/media/photos/products/2024/9/28/fs_rtx_4080_super_aero_oc_16gb_1727496774_15d37f77_progressive.jpg',
        miles:1000,
        gearType:'Automatic',
        condition: randomCondition,
        location: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.country()}`,  // Random location
        price: faker.finance.amount({min:4000, max:20000})
    }
}

const carList=faker.helpers.multiple(createRandomCarList,{
    count:7
})
export default{
    carList
}