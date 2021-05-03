const chats = [
  {
    to: "op",
    from: "er",
  },
  {
    to: "op",
    from: "er",
  },
  {
    to: "efeffefop",
    from: "erefe",
  },
  {
    to: "erefrop",
    from: "eefefr",
  },
  {
    to: "er",
    from: "op",
  },
  {
    to: "eop",
    from: "er",
  },
  {
    to: "otp",
    from: "uer",
  },
];

const friend = "er";
const user = "op";
const _chats = chats.filter((chat) => {
  if (
    (chat.to === friend && chat.from === user) ||
    (chat.to === user && chat.from === friend)
  ) {
    return true;
  }
  return false;
});
console.log(_chats);
