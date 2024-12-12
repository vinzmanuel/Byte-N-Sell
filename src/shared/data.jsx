const Part=[
    {
        id:1,
        name:'Pre-built'
    },
    {
        id:2,
        name:'CPU'
    },
    {
        id:3,
        name:'CPU Cooler'
    },
    {
        id:4,
        name:'Motherboard'
    },
    {
        id:5,
        name:'Graphics Card'
    },
    {
        id:6,
        name:'Memory'
    },
    {
        id:7,
        name:'Storage'
    },
    {
        id:8,
        name:'Case'
    },
    {
        id:9,
        name:'Power Supply'
    },
    {
        id:10,
        name:'Others'
    },

]

const Manufacturers=[
    {
        id:1,
        name:'Intel'
    },
    {
        id:2,
        name:'AMD'
    },
    {
        id:3,
        name:'Nvidia'
    },
    {
        id:4,
        name:'Asus'
    },
    {
        id:5,
        name:'Gigabyte'
    },
    {
        id:6,
        name:'Sapphire'
    },
    {
        id:7,
        name:'Zotac'
    },
    {
        id:8,
        name:'Gigabyte'
    },
]

const Pricing=[
    {
        id:1,
        amount:'$ 1000'
    },
    {
        id:2,
        amount:'$ 2000'
    },
    {
        id:3,
        amount:'$ 5000'
    },
    {
        id:4,
        amount:'$ 10000'
    },
]

const Category=[
    {
        id:1,
        name:'Pre-built',
        icon:'/gaming-pc.png'
    },
    {
        id:2,
        name:'CPU',
        icon: '/cpu.png'
    },
    {
        id:3,
        name:'CPU Cooler',
        icon: '/fan.png'
    },
    {
        id:4,
        name:'Motherboard',
        icon: '/mobo.png'
    },
    {
        id:5,
        name:'Graphics Card',
        icon: '/gpu.png'
    },
    {
        id:6,
        name:'Memory',
        icon: '/ram.png'
    },
    {
        id:7,
        name:'Storage',
        icon: '/storage.png'
    },
    {
        id:8,
        name:'Case',
        icon: '/case.png'
    },
    {
        id:9,
        name:'Power Supply',
        icon: '/psu.png'
    },
    {
        id:10,
        name:'Others',
        icon: '/electronics.png'
    },
]

export default{
    Part,
    Manufacturers,
    Pricing,
    Category
}