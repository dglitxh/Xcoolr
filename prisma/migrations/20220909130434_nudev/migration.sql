/*
  Warnings:

  - Added the required column `exName` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testName` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "exName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "testName" TEXT NOT NULL;
