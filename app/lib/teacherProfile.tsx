/* eslint-disable @typescript-eslint/no-unused-vars */
export const teacherProfile = async () => {
  const TEST_API = process.env.TEST_API || "http://localhost:3001";
  const NEXT_PUBLIC_SEVELLA_API = process.env.NEXT_PUBLIC_SEVELLA_API;

  try {
    // https://pdeaportal-4qhff.sevalla.app/teacher/getTeacher
    const response = await fetch(`${NEXT_PUBLIC_SEVELLA_API}/teacher/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Includes cookies (e.g., auth session)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch teacher profile");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching teacher profile:", error);
    throw new Error("An error occurred while fetching the teacher profile.");
  }
};
