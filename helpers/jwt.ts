const jwt = require("jsonwebtoken")

const signJwt = (): string => {
    const tkn =  jwt.sign(
        {
            expiresIn: Math.floor(60*10)
        },
        {
            koo: "nimo"
        },
        process.env.JWT_SEC,
        {
            algorithm: 'RS256'
        },
        (err: any, token: any) => {
            console.log(token);
        }

     )

     return tkn
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