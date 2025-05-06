import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = () => ({
	providers: [
		// Credentials provider for email/password login
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials) {
				// Add your authentication logic here
				// This is where you would verify credentials against your database
				if (
					credentials.email === "test@example.com" &&
					credentials.password === "Password@123"
				) {
					return {
						id: "1",
						name: "Test User",
						email: credentials.email,
					};
				}
				return null;
			},
		}),

		// Uncomment to enable social logins
		// GoogleProvider({
		//   clientId: process.env.GOOGLE_CLIENT_ID,
		//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		// }),
		// FacebookProvider({
		//   clientId: process.env.FACEBOOK_CLIENT_ID,
		//   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		// }),
	],

	// Custom pages for authentication flows

	pages: {
		signIn: `/auth/signin`,
		signUp: `/auth/signup`,
		sendOtp: `/auth/sendOtp`,
		createNewPassword: `/auth/createNewPassword`,
		resetPassword: `/auth/resetPassword`,
	},

	// Use JWT for session handling
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},

	// JWT configuration
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},

	// Callbacks for customizing JWT and session behavior
	callbacks: {
		async jwt({ token, user, account }) {
			// Add user ID to token when signing in
			if (user) {
				token.id = user.id;
				token.role = user.role;
			}

			// Add access token from OAuth providers
			if (account) {
				token.accessToken = account.access_token;
			}

			return token;
		},

		async session({ session, token }) {
			// Add user ID and role to session
			if (session.user) {
				session.user.id = token.id;
				session.user.role = token.role;
				session.accessToken = token.accessToken;
			}

			return session;
		},
	},

	// Debug mode for development
	// debug: process.env.NODE_ENV === "development",
});
