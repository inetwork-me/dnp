import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
	providers: [
		// Google Provider
		// This provider allows users to sign in with their Google account
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		// Facebook Provider
		// This provider allows users to sign in with their Facebook account
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),

		// Apple Provider
		// This provider allows users to sign in with their Apple ID

		AppleProvider({
			clientId: process.env.APPLE_CLIENT_ID,
			clientSecret: process.env.APPLE_CLIENT_SECRET,
		}),

		// Custom Credentials Provider
		// This provider allows users to sign in with their email and password
		// This is useful for testing purposes or if you want to use your own authentication system
		// This provider is not recommended for production use
		// because it does not support OAuth or OpenID Connect
		// If you want to use OAuth or OpenID Connect, use one of the other providers
		// or use the CredentialsProvider with your own authentication system
		// This provider is only here for testing purposes
		// and should not be used in production

		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],

	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		error: "/auth/error", // Error code passed in query string as ?error=
		verifyRequest: "/auth/verify-request", // (used for check email message)
		newUser: null, // Will disable the new account creation screen
	},
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id;
			return session;
		},
	},
};

export const {
	auth,
	handlers: { GET, POST },
} = NextAuth(authConfig);
