// Add or edit projects here. Each one becomes a card on the page.
// writeup: link to a GitHub repo or a writeup page. Leave as "#" until you have one.

export const projects = [
  {
    title: "Game Server Hosting",
    blurb:
      "Turned a Dell Optiplex 7050 into a Linux box that runs a few game servers at once, including a DayZ server. I handled the networking and firewall rules and keep it stable enough for real players.",
    tech: ["Linux", "Networking", "Self-hosting", "Firewall"],
    writeup: "#",
  },
  {
    title: "Cloud Hosting Infrastructure",
    blurb:
      "A school project where my group planned out a game server hosting business and built the backend for it. I set up the Windows Server 2016 side: an Active Directory domain with user accounts and group policy to manage it.",
    tech: ["Windows Server 2016", "Active Directory", "Group Policy", "School project"],
    writeup: "#",
  },
  {
    title: "Home Lab",
    blurb:
      "An ongoing home network project. Pi-hole for DNS-level ad and tracker blocking, Home Assistant for automation, and segmenting the network to keep things isolated.",
    tech: ["DNS", "Pi-hole", "Networking", "Linux"],
    writeup: "#",
  },
];
