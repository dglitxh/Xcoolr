/*
  Warnings:

  - You are about to drop the column `profileId` on the `Ratings` table. All the data in the column will be lost.
  - Added the required column `s_profileId` to the `Ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `t_profileId` to the `Ratings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_profileId_fkey";

-- AlterTable
ALTER TABLE "Ratings" DROP COLUMN "profileId",
ADD COLUMN     "s_profileId" INTEGER NOT NULL,
ADD COLUMN     "t_profileId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_t_profileId_fkey" FOREIGN KEY ("t_profileId") REFERENCES "TeacherProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_s_profileId_fkey" FOREIGN KEY ("s_profileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
