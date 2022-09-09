/*
  Warnings:

  - You are about to drop the `StudentRatings` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `s_profileId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentRatings" DROP CONSTRAINT "StudentRatings_ratingId_fkey";

-- DropForeignKey
ALTER TABLE "StudentRatings" DROP CONSTRAINT "StudentRatings_s_profileId_fkey";

-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "s_profileId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "StudentRatings";

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_s_profileId_fkey" FOREIGN KEY ("s_profileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
