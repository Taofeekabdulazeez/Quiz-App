import { Toaster } from "react-hot-toast";

function Notification() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "6px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "14px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-gray-100)",
          color: "var(--color-gray-700)",
        },
      }}
    />
  );
}

export default Notification;
