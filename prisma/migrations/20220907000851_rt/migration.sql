/*
  Warnings:

  - You are about to drop the column `rating` on the `TeacherProfile` table. All the data in the column will be lost.
  - You are about to drop the `Ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_s_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_t_profileId_fkey";

-- AlterTable
ALTER TABLE "TeacherProfile" DROP COLUMN "rating";

-- DropTable
DROP TABLE "Ratings";

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "t_profileId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentRatings" (
    "ratingId" INTEGER NOT NULL,
    "s_profileId" INTEGER NOT NULL,

    CONSTRAINT "StudentRatings_pkey" PRIMARY KEY ("ratingId","s_profileId")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_t_profileId_fkey" FOREIGN KEY ("t_profileId") REFERENCES "TeacherProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentRatings" ADD CONSTRAINT "StudentRatings_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentRatings" ADD CONSTRAINT "StudentRatings_s_profileId_fkey" FOREIGN KEY ("s_profileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
