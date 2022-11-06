import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface rating  {
    s_profileId: number,
    t_profileId: number,
    rating: number
}

const createRating = async (req: any, res: any): Promise<void>  => {
    try {
    // only students can create new ratings
        const body: rating = req.body
        const t_profileId = Number(req.params.id)
        body.rating = Number(body.rating)
        body.s_profileId = Number(body.s_profileId)
    // creates or update rating
        const fndRating = await prisma.rating.findFirst({
            where: {
                t_profileId: t_profileId,
                s_profileId: body.s_profileId
            }
        })
        if(fndRating) {
           const update = await prisma.rating.update({
                where: {
                    id: fndRating.id
                },
                data: {
                    rating: body.rating
                }
            })
            res.status(200).send({status: true, msg: "rating updated"})
        } else {
          const crt = await prisma.rating.create({
                data: {
                    t_profileId: t_profileId,
                    s_profileId: body.s_profileId,
                    rating: body.rating
                }
            })
            res.status(200).send({status: true, msg: "new ratings created"})
        }
    
           
        
    
    }
    catch(e) {
        console.log(e)
        res.status(403).send({status: false, msg: "there was an error creating ratings"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createRating