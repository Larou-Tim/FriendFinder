// ---------------------------------------
//Friends is sitting outside to prevent user manipulation 
// ---------------------------------------

var friends = [
    {
        "name": "Ahmed",
        "photo": "http://cdn.akc.org/Marketplace/Breeds/Samoyed_SERP.jpg",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Ahmed2",
        "photo": "http://cdn.akc.org/Marketplace/Breeds/Samoyed_SERP.jpg",
        "scores": [1, 3, 5, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Ahmed3",
        "photo": "http://cdn.akc.org/Marketplace/Breeds/Samoyed_SERP.jpg",
        "scores": [2, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    }
];

// ---------------------------------------
// constructor is exported to api route
// ---------------------------------------
function friendConstructor(name, picture, survey) {
    //Holds json info
    this.friendObj = {
        "name": name,
        "photo": picture,
        "scores": survey
    }

    //pushes to friends array
    this.newFriend = function () {
        friends.push(this.friendObj);
        this.findMatch();
    }

    //will hold match
    this.closestMatch;

    //used for api get function to display all friends
    this.showFriends = function () {
        return friends;
    }

    //loops and finds match
    this.findMatch = function () {
        var currentBestMatch;
        var currentBestMatchScore = -1;

        for (var i in friends) {
            //dont match yourself
            if (friends[i] != this.friendObj) {
                var newFriendBestMatch = calcFriendDifference(friends[i].scores, this.friendObj.scores);

                if (currentBestMatchScore >= 0) {
                    if (newFriendBestMatch < currentBestMatchScore) {
                        currentBestMatch = friends[i];
                        currentBestMatchScore = newFriendBestMatch;
                    }
                }
                //drops first person in array to have baseline to compare
                else {
                    currentBestMatch = friends[i];
                    currentBestMatchScore = newFriendBestMatch;
                }
            }
        }
        this.closestMatch = currentBestMatch;
    }
}

module.exports = friendConstructor;

calcFriendDifference = function (arr1, arr2) {
    totalDifference = 0;
    for (var i in arr1) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
    }
    return totalDifference;
}