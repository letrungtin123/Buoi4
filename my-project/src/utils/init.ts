import { Iusers } from "../../interfaces/user.interface";

interface IinitialData {
    
}
export const initialUser: Omit<Iusers, "id"> = {
  username: "",
  address: "",
  age: 0,
};
export const initialData = () => {
    const initial = [
        {
          id: 'username',
          name:'name',
          title:'Username',
          value:newUser.username,
          placeholder:'Username',
      
        },
        {
          id: 'address',
          name:'address',
          title:'Address',
          value:newUser.address,
          placeholder:'Address',
      
        },
        {
          id: 'age',
          name:'age',
          title:'Age',
          value:newUser.age,
          placeholder:'Age',
      
        },
      ]
};
