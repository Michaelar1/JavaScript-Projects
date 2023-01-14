function voteAge() { //Use a ternary operator to determine whether or not someone is old enough to vote
    var Age, Can_vote;
    Age = document.getElementById("age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = Can_vote;
}