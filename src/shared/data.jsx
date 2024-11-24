const Part=[
    {
        id:1,
        name:'Built PC'
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
        name:'Others/Electronics'
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
        name:'Built PC',
        icon:'/src/assets/icons/gaming-pc.png'
    },
    {
        id:2,
        name:'CPU',
        icon: '/src/assets/icons/cpu.png'
    },
    {
        id:3,
        name:'CPU Cooler',
        icon: '/src/assets/icons/fan.png'
    },
    {
        id:4,
        name:'Motherboard',
        icon: '/src/assets/icons/mobo.png'
    },
    {
        id:5,
        name:'Graphics Card',
        icon: '/src/assets/icons/gpu.png'
    },
    {
        id:6,
        name:'Memory',
        icon: '/src/assets/icons/ram.png'
    },
    {
        id:7,
        name:'Storage',
        icon: '/src/assets/icons/storage.png'
    },
    {
        id:8,
        name:'Case',
        icon: '/src/assets/icons/case.png'
    },
    {
        id:9,
        name:'Power Supply',
        icon: '/src/assets/icons/psu.png'
    },
    {
        id:10,
        name:'Electronics',
        icon: '/src/assets/icons/electronics.png'
    },
]

export default{
    Part,
    Manufacturers,
    Pricing,
    Category
}