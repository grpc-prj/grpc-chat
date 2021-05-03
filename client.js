const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "chat.proto";
const SERVER_URI = "0.0.0.0:9090";

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const client = new protoDescriptor.ChatService(
  SERVER_URI,
  grpc.credentials.createInsecure()
);

client.join(
  {
    id: "90",
    name: "op",
  },
  (err, res) => {
    console.log(err, res);
    var cs = client.receiveMsg({
      user: "op",
    });
    cs.on("data", (data) => {
      console.log(data);
    });
  }
);

/*
cs.on("data", (data) => {
  console.log(data);
});

client.sendMsg(
  {
    to: "op",
    from: "op",
    msg: "oppps",
  },
  (error, news) => {
    if (!error) console.log(error);
    console.log(news);
  }
);
*/
