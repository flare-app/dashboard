class LoginUtils {
	static isLoggedIn() {
		const token = localStorage.getItem("authToken");
		return token !== null;
	}

	static logIn() {
		localStorage.setItem("authToken", "token");
	}

	static logOut() {
		localStorage.removeItem("authToken");
	}
}

export default LoginUtils;