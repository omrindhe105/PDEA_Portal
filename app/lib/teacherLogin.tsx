


export const teacherLogin= async (email: string, password: string) =>  {
    try{
        const response = await fetch(`${process.env.API}/teacher/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include cookies in the request
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        ;
        return  response; // Return the user data or token
    }
    catch(error){
        console.error("Error during login:", error);
        throw new Error("An error occurred during login. Please try again.");
    }
    
}