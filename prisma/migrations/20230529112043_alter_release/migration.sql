/*
  Warnings:

  - You are about to alter the column `realease_date` on the `movies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `movies` MODIFY `realease_date` DATETIME(3) NOT NULL;
