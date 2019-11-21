/*
    Add new acc into list
 */
$(document).ready(function(){
  // Setup and switch-on DateTime ticking clock
  setInterval(() => {
    $("#clock").text(new Date());
  }, 1000);


  // Hold a copy of accountsData in memory
  const accountsData = [];

  /** Adds a new account */
  const addAccount = function(account) {
    addAccountToListView(account);
    addAccountToArrayData(account);
  }

  /** Adds the account data to List UI */
  const addAccountToListView = function(account) {
    const newListItem = "<li class='list-group-item'>" + account.accNo + " - " + account.accName + "</li>";
    $("#listAcc").append(newListItem);
  }

  /** Adds the account to the accountsData array */
  const addAccountToArrayData = function(account) {
    accountsData.push(account);
  }

  // Fetch and display accountsData from server using JQuery AJAX
    $.ajax({
      url: "./data/students.json",
      type: "GET",
      dataType: "json"
    }).done(function(accountsData) {
      console.log(accountsData);
      accountsData.forEach((objaccount) => {
        addAccount(objaccount);
      });
    }).fail(function(xhr, status, err) {
      alert("Error: " + status + " - " + err);
    }).always(function(xhr, status) {
      //alert( "The request is complete!" );
    });

  //#endregion

  //#region Form submission
  $("#studentAccFrm").on("submit", function(event) {
    event.preventDefault();
    const accNo = $("#accNo").val();
    const accName = $("#accName").val();
    const objNewaccount = {
      "accNo": accNo,
      "accName": accName
    };
    addAccount(objNewaccount);
    $("#accNo").val("");
    $("#accName").val("");
    $("#accNo").focus();
  });
  //#endregion

  $("#accNo").focus();
});
