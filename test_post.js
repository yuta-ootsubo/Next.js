import "dotenv/config"; // `.env.local` の環境変数を読み込む
import fetch from "node-fetch"; // Node.js で fetch を使うために必要

const addUser = async (username) => {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable`;
    const id = Math.floor(Math.random() * 1000000);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id,username })
    });
  };

  //addUser("高橋風香")

  const updateUser = async (id, newUsername) => {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;
  
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: newUsername })
    });
  };

  updateUser(2, "田中花子")

  const deleteUser = async (id) => {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;
  
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
      }
    });
  
    console.log(`ユーザーID ${id} を削除しました`);
  };

  //deleteUser(3)