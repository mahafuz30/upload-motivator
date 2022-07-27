const PriceSizeInventory = [
    {
        name : 'Meesho Price',
        require : true,
        desc : 'Customers buying at this price will be able to return products for all return reasons.',
        type:"number",
        value:null,
    },
    {
        name : 'Wrong/Defective Returns Price',
        require : true,
        desc : 'Customers buying at this price can only return wrong/defective delivered products.',
        type:"number",
        value:null,
    },
    {
        name : 'MRP',
        require : true,
        desc : "",
        type:"number",
        value:null,
    },
    {
        name : 'GST',
        require : true,
        desc : "",
        type:"number",
        value:null,
    },
    {
        name : 'HSN Code',
        require : true,
        desc : "",
        type:"text",
        value:null,
    },
    {
        name : 'Style code/ Product ID (optional)',
        require : false,
        desc : '',
        type:"number",
        value:null,
    },
    {
        name : 'Product Name',
        require : true,
        desc : '',
        type:"text",
        value:null,
    },
    {
        name : 'Size',
        require : true,
        desc : '',
        type:"text",
        value:null,
    },

]


const ProductDetails = [
    {
        name : "Color",
        require :true,
        desc : '',
        type : "select",
        option : ['Red','Green', 'Blue'],
        value:null,
    },
    {
        name : "Multipack",
        require : true,
        desc :'',
        type :"select",
        option :['Pack of 2', 'Pack of 5'],
        value:null,
    }
]

const OtherAttributes = [
    {
        name : "Blouse",
        require :false,
        desc :'',
        type :"select",
        option :['Running Blouse', "Without Blouse"],
        value:null,
    },
    {
        name : "Blouse Color",
        require :false,
        desc :'',
        type :"select",
        option :["Black", "Blue"],
        value:null,
    },
    {
        name : "Blouse Fabric",
        require :false,
        desc :'',
        type :"select",
        option :['Acrylic', 'Art Silk'],
        value:null,
    },
    {
        name : "Blouse Length (mtrs)",
        require :false,
        desc :'',
        type :"select",
        option :['0.5', '0.6'],
        value:null,
    },
    {
        name : "Blouse Pattern",
        require :false,
        desc :"",
        type :"select",
        option :['Solid','Zari Woven'],
        value:null,
    },
    {
        name : "Border",
        require :false,
        desc :'',
        type :"select",
        option :['No Border', 'Printed'],
        value:null,
    },
    {
        name :"Occasion",
        require :false,
        desc :'',
        type :"select",
        option :['Daily', 'Party'],
        value:null,
    },
    {
        name :"Pallu Details",
        require :false,
        desc :'',
        type :"select",
        option :['Embellished','Embroidered'],
        value:null,
    },
    {
        name :"Pattern",
        require :false,
        desc :'',
        type :"select",
        option :['Applique', 'Checked'],
        value:null,
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
        option :['India', "Bangladesh"],
        value:null,
    },
    {
        name :"Description",
        require :false,
        desc :'',
        type :"text",
        value:null,
    },
    {
        name : "Manufacture Details",
        require :false,
        desc :'',
        type :'text',
        value:null,
    },
    {
        name :"Packer Details",
        require :false,
        desc :'',
        type :"text",
        value:null,
    },
    {
        name : "Importer Details",
        require :false,
        desc :'',
        type :"text",
        value:null,
    }
]

const FormData = [
    {
        formName : "Price, Size and Inventory",
        data : PriceSizeInventory
    },
    {
        formName : "Product Details",
        data : ProductDetails
    },
    {
        formName : "Other Attributes",
        data : OtherAttributes
    }
]

export default FormData;