"use client";
import { Reservation } from "@prisma/client";
import { SafeUser, SafeListing } from "@/app/types";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  return <div>Listing Client</div>;
};

export default ListingClient;
