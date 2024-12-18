"use client"

import { getCookie } from "cookies-next";
import { signOut } from "next-auth/react";

export const fetchClient = async (input, init) => {
  const jwt = getCookie("jwt");

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(jwt && { Authorization: `Bearer ${jwt}` }),
    },
  });

  if (response.status === 401) {
    await signOut();
  }

  return response;
};
