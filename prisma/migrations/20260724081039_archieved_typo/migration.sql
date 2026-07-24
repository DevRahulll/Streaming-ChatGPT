/*
  Warnings:

  - You are about to drop the column `isArchieved` on the `Conversation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "isArchieved",
ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false;
