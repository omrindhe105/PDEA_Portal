export const teacherLogin = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://pdeaportal-4qhff.sevalla.app/teacher/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Remove this unless you're using cookies:
             credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        // Optional: log for debugging
        console.log("Login response status:", response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Login failed:", errorData);
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json(); // ✅ Properly parse JSON
        return data;
    } catch (error) {
        console.error("Error during login:", error);
        throw new Error("An error occurred during login. Please try again.");
    }
};
