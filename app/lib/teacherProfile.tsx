export const teacherProfile = async () => {
  try {
    const response = await fetch('https://pdeaportal-4qhff.sevalla.app/teacher/getTeacher', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Includes cookies (e.g., auth session)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch teacher profile');
    }

    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error("Error fetching teacher profile:", error);
    throw new Error("An error occurred while fetching the teacher profile.");
  }
};
