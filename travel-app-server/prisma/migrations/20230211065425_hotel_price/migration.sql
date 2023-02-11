/*
  Warnings:

  - You are about to drop the column `pricePeerDay` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `pricePerDay` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "pricePeerDay",
ADD COLUMN     "pricePerDay" TEXT NOT NULL;
