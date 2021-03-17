const users=[]

//add user, remove user, get user,get usersinroom

const addUser = ({id, username, room})=> {
    username= username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    if(!username || !room){
        return {
            error:"Username and room are required"
        }
    }
    //check ffor existing user

    const existingUser = users.find((user)=> {
        return user.room === room && user.username ===username
    })

    if(existingUser){
        return {
            error:"username is in used"
        }
    }


    const user = {id, username, room }
    users.push(user)
    return {user}
}
addUser({
    id:22,
    username:'Hieu',
    room:"room1"
})
console.log(users);

const res = addUser({
    id:33,
    username:'',
    room:''
})
console.log(res);
const res2 = addUser({
    id:33,
    username:'Hieu',
    room:'room1'
})
console.log(res2);