-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT;

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "topPlaceId" TEXT,
    "placeId" TEXT,
    "authorId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "pricePeerDay" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopPlace" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "TopPlace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopPlacesImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "topPlaceId" TEXT NOT NULL,

    CONSTRAINT "TopPlacesImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlacesImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,

    CONSTRAINT "PlacesImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "aboutMe" TEXT NOT NULL,
    "distance" TEXT NOT NULL,
    "followersCount" INTEGER NOT NULL,
    "followingSCount" INTEGER NOT NULL,
    "trips" INTEGER NOT NULL,

    CONSTRAINT "travel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_topPlaceId_fkey" FOREIGN KEY ("topPlaceId") REFERENCES "TopPlace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopPlacesImage" ADD CONSTRAINT "TopPlacesImage_topPlaceId_fkey" FOREIGN KEY ("topPlaceId") REFERENCES "TopPlace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacesImage" ADD CONSTRAINT "PlacesImage_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
