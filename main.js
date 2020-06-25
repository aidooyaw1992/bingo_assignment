initialize()

function initialize(){
    console.log("initialized");
    const numbOfTickets = 6;
    const str0 = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';

    let tickets = parseNumbers(str0);

    // console.log(tickets);
    for (let i = 0; i < numbOfTickets; i++) {
        let ticketinDiscussion = tickets[i]
        let rows0 = rows(ticketinDiscussion)
        console.log(rows0);
    }
}


function rows(ticketinDiscussion){
    let ticket = ticketinDiscussion.slice()
    const rows = []
    for (let row = 0; row < 3; row++) {
        rows[row] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 5; i++) {
            const value = ticket.shift()
            const column = value.number === 90 ? 8 : Math.floor(value.number / 10)
            rows[row][column] = {
                number: value.number
            }
        }
    }
    return rows;
}


function parseNumbers(bingoTicketStr){
    const ticketStr =bingoTicketStr;
    let tNumbers = [];
    let checkIndex = 0;
    const results = [];

    for (let index = 0; index < ticketStr.length; index+=2) {
        checkIndex ++
        tNumbers.push({
            number: Number.parseInt(`${ticketStr[index]}${ticketStr[index + 1]}`, 10)
        })

        if(checkIndex === 15){
            results.push(tNumbers)
            tNumbers = []
            checkIndex = 0
        }
    }
    return results
}
