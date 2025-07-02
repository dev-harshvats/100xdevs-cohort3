// Pick & Partial

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

// Pick
type UpdateProps = Pick<User, "name" | "age" | "email">;
// type UpdateProps = {
//   name: string;
//   age: number;
//   email: string;
// };

function updateUser(updatedProps: UpdateProps){
  // hit the database to update user
}

// Partial
type UpdatePropsOptional = Partial<UpdateProps>
// type UpdateProps = {
  //   name?: string;
  //   age?: number;
  //   email?: string;
  // };

function updateUserOptional(updatedPropsOptional: UpdatePropsOptional){
  // hit the database to update partial date of the user
}

updateUser({
  // Doesn't allow partial data to be updated
  name: "fhsdgj",
  age: 3243,
  email: "dfsjfs"
})
updateUserOptional({
  // Allows partial data to be updated
  name: "fhsdgj",
  age: 3243
})