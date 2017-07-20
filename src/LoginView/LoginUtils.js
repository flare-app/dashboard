class LoginUtils {
	static isLoggedIn() {
		return !!localStorage.getItem("authToken");
	}

	static logIn() {
		localStorage.setItem("authToken", "token");
	}

	static logOut() {
		localStorage.removeItem("authToken");
	}
}

export default LoginUtils;