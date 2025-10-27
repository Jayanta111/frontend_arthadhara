import React from "react";
import Ticket from "./Ticket";

function CreateTicket() {
  const ticketsData = [
    {
      title: "Account Opening",
      supportSteps: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
      links: [
        { label: "Surveillance measure on scrips - October 2025", href: "#" },
      ],
    },
    {
      title: "Your Arthadhara Account",
      supportSteps: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CRM) and Depository Participant (DP)",
        "Nomination, Transfer and conversion of securities, HUF and LLP",
      ],
      links: [], // optional, can be empty
    },
    {
      title: "Kite",
      supportSteps: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
      links: [],
    },
    {
      title: "F&O Activation",
      supportSteps: [
        "Step 1: Fill application form",
        "Step 2: Upload required documents",
        "Step 3: Verification process",
        "Step 4: Activation confirmation",
      ],
      links: [],
    },
    {
      title: "Depository Services",
      supportSteps: [
        "Demat Account opening",
        "Demat Account modification",
        "Dematerialization of securities",
        "Rematerialization of securities",
      ],
      links: [],
    },
  ];

  return (
    <>
      {ticketsData.map((ticket, idx) => (
        <Ticket
          key={idx}
          index={idx + 1}
          title={ticket.title}
          supportSteps={ticket.supportSteps}
          links={ticket.links}
        />
      ))}
    </>
  );
}

export default CreateTicket;
