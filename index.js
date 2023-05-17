const record = [
    { year: "2002", result: 'W'},
    { year: "2003", result: 'W'},
    { year: "2005", result: 'N/A'},
    { year: "2007", result: 'W'},
    { year: "2009", result: 'L'},
    { year: "2011", result: 'L'},
    { year: "2015", result: 'W'},
];

function superbowlWin(collection){
    for(const record of collection){
        if (record.result === 'W'){
            return record.year;
        }
    }
    return undefined;
};

record.find(superbowlWin);