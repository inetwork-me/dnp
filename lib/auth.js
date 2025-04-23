import { call } from "file-loader";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authConfig = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = {
					id: "1",
					name: "Waleed S",
					email: "test@example.com",
				};
				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		authorized({ req, token }) {
			if (token) return true;
		},
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
