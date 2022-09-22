const jwt = require("jsonwebtoken")

const signJwt = async ()  => {
    await jwt.sign(
        process.env.JWT_SEC,
        "nimo",
        (err: any, token: any) => {
            if(err) {
                console.log(err)
                throw new Error(err);  
            }
            else {
                console.log(token)
                return String(token)
            }
        }
     )
}

const verifyJwt = (token: string): boolean => {
    const vrfy = jwt.verify(token, process.env.JWT_SEC, ( err: any, decoded: any) => {
        if (err) {
            console.log(err)
            return false
        };
        console.log(decoded)
        return true;
    })
    return vrfy
}

module.exports = {
    signJwt,
    verifyJwt
}