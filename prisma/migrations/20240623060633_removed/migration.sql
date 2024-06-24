/*
  Warnings:

  - You are about to drop the column `supportStatus` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `usertype` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Estimatation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Estimatation" DROP CONSTRAINT "Estimatation_inquiryId_fkey";

-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "supportStatus";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "usertype",
ADD COLUMN     "userType" TEXT NOT NULL;

-- DropTable
DROP TABLE "Estimatation";

-- DropEnum
DROP TYPE "EstimatationStatus";

-- DropEnum
DROP TYPE "SupportStatus";
