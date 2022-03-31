import passport from "@/lib-api/auth";
import session from "@/lib-api/middlewares/session";

const auth = [session, passport.initialize(), passport.session()];

export default auth;
