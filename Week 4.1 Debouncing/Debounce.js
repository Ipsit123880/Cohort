    // in this API the code for calculate sum is already written
    // const endpoint = "https://sum-server.100xdevs.com/sum";
    // The above one is not working so write your own code
    // debounce is a powerful technique used to optimize event handling by delaying the execution of a function until after a specified period of time
    let timeout;
    function debounceCalculateSum() {
        clearTimeout(timeout);
        // This line clears the existing timeout (if any). clearTimeout is a function that cancels a timeout previously established by setTimeout.
        // This is crucial for implementing a debounce mechanism.
        timeout = setTimeout(function () {
            // In JavaScript, the timeout variable in the context of the setTimeout function is a positive integer,
            // and it represents a unique identifier for the timer set by setTimeout. This identifier is returned
            // and you can use it later to cancel the timer using clearTimeout.
            calculateSum();
        }, 100);
    }
    // `timeout` is setTimeout(function () { calculateSum(); }, 100);
    // This line sets a new timeout. It uses setTimeout to delay the execution of a function (calculateSum) by 100 milliseconds.
    // The timeout value (100 milliseconds in this case) determines the delay before the function is actually called.
    
    async function calculateSum() {
        const firstNum = document.getElementById("firstNum").value;
        const secondNum = document.getElementById("secondNum").value;

        //                       const response = await fetch(endpoint + "?" + "a=" + firstNum + "&b=" + secondNum);
        // As link isnt working there is no use of endpoint
        // fetch: The fetch function is a modern JavaScript API for making network requests. It returns a Promise that resolves to the Response to that request.
        // endpoint: This is a variable that holds the URL or endpoint to which the request is being made.
        // "?": This is the question mark character, which is used to indicate the start of the query parameters in a URL.
        // "a=" + firstNum + "&b=" + secondNum: These are the query parameters being appended to the URL. The parameters are named a and b, and their values are the contents of `firstNum` and `secondNum`.
        // The & symbol is used to separate multiple parameters.
        // So, if endpoint is, for example, "https://example.com/api", and firstNum is 10 and secondNum is 20, the resulting URL will be: https://example.com/api?a=10&b=20
        //                       const totalSum = await response.text();
        //                       await response.text();
        // This line is using the await keyword to pause the execution of the calculateSum function until
        // the promise returned by response.text() is resolved. The text() method is part of the Body interface in the Fetch API
        // and is used to read the response body as text.
        const totalSum = parseInt(firstNum) + parseInt(secondNum);
        const finalSum = document.getElementById("finalSum");
        finalSum.innerHTML = totalSum;
        // console.log(finalSum);
    }