import Axios from 'axios';

let uid;
let ulist = [];

export const registerUser2 = (user) => {
    const action = {
        user,
    }
    console.log("action addUser2 called : ", action);
    return action;
}
export function registerUser(x) {
    let z = { ...x };
    Object.keys(z).map(e => { z[e] = z[e].value });
    

    let y;
    return ((dispatch) => Axios.get("http://localhost:3000/Users", {
        headers: {
        }
    }).then(res => {
        ulist = [...res.data];
        uid= ulist.map(e=>e.id).reduce(function(a, b) {
            return Math.max(a, b);
        });
        uid+=1;
        console.log("uid : ",uid);
        z = { id:uid,...z, role: "user"};
        y = [...res.data, z];
        /********************update database with new one*********************** */
        Axios.put("http://localhost:3000/Users",
            y,
            {
              
            });
        dispatch(registerUser2(z));
    }))
}
/***********************login user action package*********************************** */
export const loginUser2 = (user) => {
    const action = {
        user,
    }
    console.log("action loginUser2 called : ", action);
    return action;
}

export function loginUser(x, y) {
    let a;
    return ((dispatch) => Axios.get("http://localhost:3000/Users", {
     
    }).then(res => {
        let z = [...res.data]
        a = z.find(e => ((e.email === x) && (e.password === y)));
        console.log("email: ", x, " password : ", y);

        dispatch(loginUser2(a));
    }))
}

export const logoutUser = () => {
    const action = {
        user: "none"
    }
    console.log("action LOGOUT_USER called : ", action);
    return action;
}