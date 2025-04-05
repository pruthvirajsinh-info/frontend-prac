const PRODUCT = {
  productName :'parker jotter standard CT ball pen',
  color: '(black)',
  rating:4,
  offer:5,
  price:270
};

PRODUCT["color"]='(white)'


const PROFILE ={
  userName : 'shradhakhapra',
  isFollow: true,
  post:195,
  followers:569,
  bio:'to educate someone is the highest privilledge'
};

PROFILE['post']=PROFILE['post']+4;
console.log(PROFILE['post']);



console.log (typeof PROFILE['isFollow']);