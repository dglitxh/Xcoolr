enum userType {
    Teacher,
    Student
}

const authMiddleware = (req: any, res: any, next: any): void => {
    if (!req.session.token) {
        res.status(400).end("User is not authenticated")
        return
    }
    next()
}

const teachersOnly = (req: any, res: any, next: any): void => {
    if (req.session.role === userType[0]){
        next()
    }
    else {
        res.status(403).end("This action is for teachers only")
        return
    }
}

const studentsOnly = (req: any, res: any, next: any): void => {
    if (req.session.role === userType[1]){
        next()
    }
    else {
        res.status(403).end("This action is for students only")
        return
    }
    
}

module.exports = {
    studentsOnly,
    teachersOnly,
    authMiddleware
}