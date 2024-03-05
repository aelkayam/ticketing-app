import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id !== "new";
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = (await getTicketById(params.id)).foundTicket;
    // console.log(updateTicketData);
  } else {
    updateTicketData = { _id: "new" };
  }
  return <TicketForm ticket={updateTicketData} EDITMODE={EDITMODE} />;
};

export default TicketPage;
