// Records

interface Users {
  id: string;
  name: string;
}

// One way to implement types to object
// type Userr = { [key: string]: Users };

// Another way (Records)
type Userr = Record<string, Users>;

const user: Userr = {
  asd: { id: "id1", name: "asdUser" },
  qwer: { id: "id2", name: "qwerUser" },
};

console.log(user.asd);      // logs { id: "id1", name: "asdUser" }


// Maps

const userMap = new Map()
userMap.set("asdsfsdf", {name: "das", age: 2324})
userMap.set("dfsfsdfw", {name: "vds", age: 2132})

const userA = userMap.get("asdsfsdf")
userMap.delete("asdsfsdf")