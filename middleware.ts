export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/reservations", "/favorites", "/trips", "/properties"],
};
