/*
  Warnings:

  - You are about to drop the column `emails` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `emails`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;
