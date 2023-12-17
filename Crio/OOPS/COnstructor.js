function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    this.friendList.forEach((i) => console.log(i));
  };
  this.findMutualsWith = function (userObj) {
    return this.friendList.filter((i) => userObj.friendList.includes(i));
  };
}

const vivek = new User("Vivek Nigam");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Abhijay");

const varun = new User("Varun Verma");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Abhijay");

vivek.printFriendList();
console.log("--------------");
varun.printFriendList();

const mutualFriends = vivek.findMutualsWith(varun);
console.log(mutualFriends);
