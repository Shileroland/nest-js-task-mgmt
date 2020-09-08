class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
  }

  aanounceFriendship(name) {
    console.log(`${name} is now a friend!`);
  }

  removeFriend(name){
    const idx = this.friends.indexOf(name);

    if(idx === -1){
        throw new Error('friend not found')
    }
  }
}

describe('FriendsList', () => {
  let friendsList;
  beforeEach(() => {
    friendsList = new FriendsList();
  });
  it('intializes Friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('Zainab');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('Announces Friendship', () => {
    friendsList.aanounceFriendship = jest.fn();
    expect(friendsList.aanounceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Zainab');
    expect(friendsList.aanounceFriendship).toHaveBeenCalledWith('zainab');
  });
  
});

  
