"use client";

import { SafeReservation } from "../types";

interface ReservationsClientProps {
  currentUser?: string;
  reservations?: SafeReservation;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  currentUser,
  reservations,
}) => {
  return <div>Reservations on my property</div>;
};

export default ReservationsClient;
