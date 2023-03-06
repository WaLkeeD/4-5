let arr = [];

while (true) {
    var order = prompt("Введите элемент: ");
    if (order.includes("add")) {
        var names = order.slice(4);
        arr.push(names);
        console.log(`Был добавлен ${names}`);
        console.log(arr);
    } else if (order.includes("del")) {
        var delName = order.slice(4);
        if (order.includes(delName)) {
            arr.splice(delName, 1);
        }
        console.log(`Был удален ${order.slice(4)}`);
        console.log(arr);
    } else if (order == "stop") {
        break;
    }
}

console.log(arr);
