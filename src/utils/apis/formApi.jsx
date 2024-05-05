// import axios from "axios";
// const BASE_URL = "http://localhost:8000/api/v1/forms"; // Replace with your backend API URL
// const response = await axios.post(`${BASE_URL}/submit`, formData);
export const submitFormData = async (formData) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/forms/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Post Success:", data);
    return data;
  } catch (error) {
    console.error("Post Error:", error);
    throw error;
  }
};

// export const submitFormData = async (formData) => {
//     try {
//         const response = await axios.post('http://localhost:8000/api/v1/forms/submit', formData);

//         if (!response.data.success) {
//             throw new Error('Server response indicates failure');
//         }

//         console.log('Post Success:', response.data);

//         return response.data;
//     } catch (error) {
//         console.error('Post Error:', error);
//         throw error;
//     }
// };
