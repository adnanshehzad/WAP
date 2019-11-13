////////////Code By Adnan Shehzad for Question 1 Mini BankApp////////
$(document).ready(function() {
    // check for Geolocation support
    const accountinfoarray = new Array();
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
    } else {
        console.log('Geolocation is not supported for this Browser/OS.');
    }
    //Add new Account Info to list and Array
    const addAccount = function(acc) {
        addAccounttoListView(acc);
        addAccounttoArray(acc);
        addAccounttoLocalStorage(acc);
    }

    //Adding account to list view
    const addAccounttoListView = function(acc) {
        let newListitem = "<li class='list-group-item'>" + acc.AccountNumber + "|" + acc.CustomerName + "|" + acc.TypeofAccount + "</li>";
        $("#ullist").append(newListitem);
    }
    const addAccounttoArray = function(acc) {
        accountinfoarray.push(acc);
    }
    const addAccounttoLocalStorage = function(acc) {
        let idx = localStorage.length;
        localStorage.setItem(idx, acc.AccountNumber + "|" + acc.CustomerName + "|" + acc.TypeofAccount);
    }

    let localDataSize = localStorage.length;
    if (localDataSize > 0) {
        for (let i = 0; i < localDataSize; i++) {
            const localDataItem = localStorage.getItem(i);
            AccountArray = localDataItem.split('|');
            const obj = {
                "AccountNumber": AccountArray[0],
                "CustomerName": AccountArray[1],
                "TypeofAccount": AccountArray[2]
            }
            addAccounttoListView(obj);
            addAccounttoArray(obj);
        }
    }
    //Fetching the data from server using AJAX
    else {
        $.ajax({
            url: "http://mumstudents.org/~610534/data/customerData.json",
            type: "GET",
            dataType: "json"
        }).done(function(account) {
            account.forEach((objacc) => {
                addAccount(objacc);
            });
        }).fail(function(xhr, status, err) {
            alert("Error:" + status + "-" + err);
        }).always(function(xhr, status) {
            alert("request completed");
        });
    }
    //Form Submission
    $("#formid").on("submit", function(event) {
        event.preventDefault();
        alert("Form Submitted");
        const custname = $("#customernameid").val();
        const accountno = $("#accountnumid").val();

        const acctype = $("#typeofaccountid option:selected").text();

        const obj = {
            "AccountNumber": accountno,
            "CustomerName": custname,
            "TypeofAccount": acctype
        }
        addAccount(obj);

        $("#customernameid").val("");
        $("#accountnumid").val("");
        console.log(accountno + "\n" + custname + "\n" + acctype);
    });
    console.log("End Working");

}); //end of Ready Function