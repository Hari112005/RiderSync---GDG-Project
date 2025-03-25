import prisma from "../config/db.js";

export const requestRide = async (riderId, pickup, destination, fare) => {
  return prisma.ride.create({
    data: { riderId, pickup, destination, fare, status: "pending" },
  });
};

export const acceptRide = async (rideId, driverId) => {
  return prisma.ride.update({
    where: { id: rideId },
    data: { driverId, status: "accepted" },
  });
};
