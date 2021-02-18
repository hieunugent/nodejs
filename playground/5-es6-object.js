const product = {label:"red book", stock:10}


const transaction = (type, {label, stock=0}={})=> {
    console.log(type, label, stock);
}
transaction('order',product)

