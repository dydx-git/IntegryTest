const getStockInfo = async date => {
    const sanitizedDate = Date.parse(date);
    let dateTime = new Date();
    if (isNaN(sanitizedDate)) {
        console.log("invalid date format");
        return false;
    } else {
        dateTime = new Date(sanitizedDate);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${dateTime.getDate()}-${monthNames[dateTime.getMonth()]}-${dateTime.getFullYear()}`);
    const dataObject = await response.json();

    return dataObject?.data[0];
}

(async () => {
    const stockInfo = await getStockInfo("5-January-2000");
    
    let htmlString = "";

    if (!stockInfo) {
        htmlString += "Wrong input date format";
    } else {
        htmlString += `Open: ${stockInfo?.open ?? "Data unavailable"} <br>`;
        htmlString += `High: ${stockInfo?.high ?? "Data unavailable"} <br>`;
        htmlString += `Low: ${stockInfo?.low ?? "Data unavailable"} <br>`;
        htmlString += `Close: ${stockInfo?.close ?? "Data unavailable"} <br>`;
    }
    
    document.getElementById("task3").innerHTML += htmlString;
})();
