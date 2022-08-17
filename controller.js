const houses = require('./db.json'); //Need to import the DB.JSON file
let houseID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouses: (req, res) => {
        const id = +req.params.id;
        const index = houses.findIndex(elem => elem.id === id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouses: (req, res) => {
        let {address, price, imageURL} = req.body;
        price = +price;
        const newHouse = {
            id: houseID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse);
        res.status(200).send(houses);
        houseID++;
    },
    updateHouses: (req, res) => {
        let {id} = req.params;
        id = +id;
        let {type} = req.body;
        let index = houses.findIndex(elem => elem.id === id);

        if (houses[index].price === 10000 && type === 'minus'){
            house[index].price = 0;
            res.status(200).send(houses);
        }
        else if(houses[index].price < 10000 && type === 'minus')
            res.status(400).send('Cannot go below 0')
        else if (type === 'plus'){
            houses[index].price += 10000;
            res.status(200).send(houses);
        }
        else if (type === 'minus'){
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }
        else
            res.sendStatus(400);
    }
}

