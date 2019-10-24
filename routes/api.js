const Router = require("koa-router");
const router = Router({
    prefix: '/card'
});
const validateCard = require('../Validate/validatecard');

//mongodb://cardinfo:card2019@ds335648.mlab.com:35648/cards

// DB Mock
const data = [];
const balance = "£-0";

// Get Cards 
router.get('/', ctx => {
    console.log(data);
    ctx.body = data;
});

// Add Card
router.post('/add', ctx => {
    const { cardHolderName, cardNumber, cardLimit } = ctx.request.body;
    console.log("ss " + cardNumber)
    if (validateCard(cardNumber)) {
        data.push({ cardHolderName, cardNumber, balance, cardLimit })
        console.log(data);
        response = {
            status: "success",
            data: {
                "cardHolderName": cardHolderName,
                "cardNumber": cardNumber,
                "balance": balance,
                "cardLimit": cardLimit
            }
        }

        ctx.body = response;
    }
    else {
        console.log("Card is not valid. cardNumber : " + cardNumber);
        ctx.body = {
            status: "error",
            error: "Card is not valid. cardNumber : " + cardNumber
        }
    }
});

module.exports = router;