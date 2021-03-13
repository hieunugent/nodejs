const request = require("supertest");

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");
const { response } = require("../src/app");


const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Joseph",
  email: "lucci@example.com",
  password: "weareyoung1234",
  tokens: [
    {
      token: jwt.sign({_id:userOneId}, process.env.JWT_SECRET)
    }
  ],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save()
})
// afterEach(()=> {

// })
test("Should signup a new user", async () => {
  // should noyt used dot front of directory
  const response = await request(app)
    .post("/users")
    .send({
      name: "Hieu",
      email: "hieunugdent@example.com",
      password: "mypass9999",
    })
    .expect(201);

  // Assert that the response is changed correctly
  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull()
    // assert that about the response
  expect(response.body).toMatchObject({
      user:{
          name:'Hieu',
          email:"hieunugdent@example.com",
      },
      token:user.tokens[0].token
  })
  expect(user.password).not.toBe('mypass9999')

});

test("should login successful", async () => {
  const response= await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
    
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)



});

test("should not login with unregistor user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "thepassisok999",
    })
    .expect(400);
});
test('should profile for user', async() => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})
test('should not get profile for user', async() => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})
test('should not detele unAuthenticated user',async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('should delete account user', async() => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()

})
