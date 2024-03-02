export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }: { auth: any; request: any }) {
            const user = auth?.user;
            const isOnAdminPanel =
                request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlockPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage =
                request.nextUrl?.pathname.startsWith("/login");

            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            if (isOnBlockPage && !user) {
                return false;
            }

            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};
