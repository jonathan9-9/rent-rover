import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import getFavorites from "../actions/getFavorites";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="There are currently no favorites"
          subtitle="No favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient currentUser={currentUser} favorites={favorites} />
    </ClientOnly>
  );
};

export default ListingPage;
