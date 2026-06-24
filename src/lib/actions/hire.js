"use server"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const hireLawyer = async (newHireData) => {
  // console.log("new hire data",newHireData);
  try {
    const res = await fetch(`${baseUrl}/api/hires`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHireData),
    })

    const data = await res.json();
    // console.log("hired data",data);
    return{}
  }
  catch (error) {
    console.log("error",error);}

  }