import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface rating  {
    t_profileId: number
    s_profileId: number
    rating: number
}

const createRating = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new ratingss
        const body: rating = req.body
        const tid: number = Number(req.params.id)
        body.t_profileId = tid
        const newRating = await prisma.ratings.create({
           data: {
            t_profileId: tid,
            s_profileId: body.s_profileId,
            rating: body.rating
           }

        })

        res.status(200).send("new ratings created")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error creating ratings"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createRating