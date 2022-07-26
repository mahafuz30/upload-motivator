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
        desc : 'Customers buying at this price can only return wrong/defective delivered products.'
    },
    {
        name : 'MRP',
        require : true,
        desc : ""
    },
    {
        name : 'GST',
        require : true,
        desc : ""
    },
    {
        name : 'HSN Code',
        require : true,
        desc : ""
    },
    {
        name : 'Style code/ Product ID (optional)',
        require : false,
        desc : ''
    },
    {
        name : 'Product Name',
        require : true,
        desc : ''
    },
    {
        name : 'Size',
        require : true,
        desc : ''
    },

]

// For Select 
const select = {
    name : 'Size',
    require : true,
    desc : '',
    option:[
        'a',
        'b',
        'c'
    ]
}

export {PriceSizeInventory};