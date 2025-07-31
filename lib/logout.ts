import { toast } from "sonner";
export const logoutUser = async (): Promise<boolean> => {
    const response = await fetch("http://localhost:3001/teacher/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // <Toaster position="top-center" />
      toast.success("Logged Out Successfully!", {
          description: "Redirecting to login page...",
          // position: "top-center",
          // action: {
          //   label: "Cancel",
          //   // position: "top-center",
          //   onClick: () => console.log("Cancel"),
          // },
        })
      // alert("Logout Successful");
      
      setTimeout(() => {
      window.location.href = "/teacher/login";},3000); // Manual redirect
    } else {
      console.error("Logout failed");
      toast.error("Logout failed", {
        description: "Please try again",
      });
    }
    return response.ok;
  };