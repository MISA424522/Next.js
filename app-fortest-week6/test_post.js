import "dotenv/config";

import fetch from "node-fetch";



// POST: 新規ユーザー追加

const addUser = async (username) => {

  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable`;



  const response = await fetch(url, {

    method: "POST",

    headers: {

      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,

      "Content-Type": "application/json"

    },

    body: JSON.stringify({ username })

  });

};



// 実行例：addUser("高橋風香")