/*
  Warnings:

  - Changed the type of `status` on the `BorrowRecords` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Member', 'Admin');

-- CreateEnum
CREATE TYPE "BorrowStatus" AS ENUM ('BORROWED', 'RETURNED', 'OVERDUE');

-- AlterTable
ALTER TABLE "BorrowRecords" DROP COLUMN "status",
ADD COLUMN     "status" "BorrowStatus" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "UserStatus" NOT NULL;
