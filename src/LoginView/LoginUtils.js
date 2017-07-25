class LoginUtils {
	static isLoggedIn() {
		return !!localStorage.getItem("authToken");
	}

	static logIn(authToken) {
		localStorage.setItem("authToken", authToken);
	}

	static logOut() {
		localStorage.removeItem("authToken");
	}
}

export default LoginUtils;