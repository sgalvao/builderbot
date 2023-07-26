-- AlterTable
ALTER TABLE "User" ADD COLUMN     "partnerCode" TEXT;

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partnerCode" TEXT NOT NULL,
    "stripeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "percentFee" INTEGER NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_partnerCode_key" ON "Partner"("partnerCode");



-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_partnerCode_fkey" FOREIGN KEY ("partnerCode") REFERENCES "Partner"("partnerCode") ON DELETE CASCADE ON UPDATE CASCADE;
