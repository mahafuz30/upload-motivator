const PriceSizeInventory = [
    {
        name : 'Meesho Price',
        require : true,
        desc : 'Customers buying at this price will be able to return products for all return reasons.',
        type:"text"
    },
    {
        name : 'Wrong/Defective Returns Price',
        require : true,
        desc : 'Customers buying at this price can only return wrong/defective delivered products.',
        type:"text"
    },
    {
        name : 'MRP',
        require : true,
        desc : "",
        type:"number"
    },
    {
        name : 'GST',
        require : true,
        desc : "",
        type:"number"
    },
    {
        name : 'HSN Code',
        require : true,
        desc : "",
        type:"text"
    },
    {
        name : 'Style code/ Product ID (optional)',
        require : false,
        desc : '',
        type:"number"
    },
    {
        name : 'Product Name',
        require : true,
        desc : '',
        type:"text"
    },
    {
        name : 'Size',
        require : true,
        desc : '',
        type:"text"
    },

]


const ProductDetails = [
    {
        name : "Color",
        require :true,
        desc : '',
        type : "select",
        option : ['Red','Green', 'Blue']
    },
    {
        name : "Multipack",
        require : true,
        desc :'',
        type :"select",
        option :['Pack of 2', 'Pack of 5']
    }
]

const OtherAttributes = [
    {
        name : "Blouse",
        require :false,
        desc :'',
        type :"select",
        option :['Running Blouse', "Without Blouse"]
    },
    {
        name : "Blouse Color",
        require :false,
        desc :'',
        type :"select",
        option :["Black", "Blue"]
    },
    {
        name : "Blouse Fabric",
        require :false,
        desc :'',
        type :"select",
        option :['Acrylic', 'Art Silk']
    },
    {
        name : "Blouse Length (mtrs)",
        require :false,
        desc :'',
        type :"select",
        option :['0.5', '0.6']
    },
    {
        name : "Blouse Pattern",
        require :false,
        desc :"",
        type :"select",
        option :['Solid','Zari Woven']
    },
    {
        name : "Border",
        require :false,
        desc :'',
        type :"select",
        option :['No Border', 'Printed']
    },
    {
        name :"Occasion",
        require :false,
        desc :'',
        type :"select",
        option :['Daily', 'Party']
    },
    {
        name :"Pallu Details",
        require :false,
        desc :'',
        type :"select",
        option :['Embellished','Embroidered']
    },
    {
        name :"Pattern",
        require :false,
        desc :'',
        type :"select",
        option :['Applique', 'Checked']
    },
    // {
    //     name :"Display Test Print or Pattern Type",
    //     require :false,
    //     desc :'',
    //     type :"select",
    //     option :['']
    // },
    // {
    //     name : "Saree Fabric",
    //     require :false,
    //     desc :'',
    //     type :"select",
    //     option :[]
    // },
    // {
    //     name : "Saree Length (mtrs)",
    //     require :false,
    //     desc :'',
    //     type :"select",
    //     option :[]
    // },
    // {
    //     name : "Transparency",
    //     require :false,
    //     desc :'',
    //     type :"select",
    //     option :[]
    // },
    // {
    //     name :"Type",
    //     require :false,
    //     desc : '',
    //     type :"select",
    //     option :[]
    // },
    {
        name : "COUNTRY OF ORIGIN",
        require :false,
        desc :'',
        type :"select",
        option :['India', "Bangladesh"]
    },
    {
        name :"Description",
        require :false,
        desc :'',
        type :"text"
    },
    {
        name : "Manufacture Details",
        require :false,
        desc :'',
        type :'text'
    },
    {
        name :"Packer Details",
        require :false,
        desc :'',
        type :"text"
    },
    {
        name : "Importer Details",
        require :false,
        desc :'',
        type :"text"
    }
]

export {PriceSizeInventory,ProductDetails, OtherAttributes};