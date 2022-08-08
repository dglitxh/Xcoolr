module.exports; interface sign_up {
    email: string;
    name: string;
    password: string;
}

module.exports; interface log_in {
    email: string;
    password: string;
}

module.exports; interface t_profile {
    id       :number
    bio      :string
    teacher  :object   
    teacherId:number       
    subjects :object[]
    rating   :number
    Ratings  :object[]
}