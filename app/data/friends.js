// ---------------------------------------
// Friends is sitting outside to prevent user manipulation 
// ---------------------------------------

var friends = [
    {
        "name": "Jim",
        "photo": "data:image/jpeg;base64,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",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Jack",
        "photo": "http://cdn.akc.org/Marketplace/Breeds/Samoyed_SERP.jpg",
        "scores": [1, 3, 5, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Sally",
        "photo": "https://s-media-cache-ak0.pinimg.com/originals/0d/a0/a9/0da0a9469b4af1cc51b0ccfb6fd6f9d6.jpg",
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