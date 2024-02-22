import { Iusers } from "../../interfaces/user.interface";

interface IinitialInputData {
  newUser: Omit<Iusers, 'id'>;
}
export const initialUser: Omit<Iusers, "id"> = {
  username: "",
  address: "",
  age: 0,
};
export const initialInputData =  ({ newUser }: IinitialInputData) => {
    const initial = [
        {
          id: 'username',
          name:'username',
          title:'Username:',
          value:newUser.username,
          placeholder:'Username',
      
        },
        {
          id: 'address',
          name:'address',
          title:'Address:',
          value:newUser.address,
          placeholder:'Address',
      
        },
        {
          id: 'age',
          name:'age',
          title:'Age:',
          value:newUser.age,
          placeholder:'Age',
      
        },
      ]
      return initial;
};
export default IinitialInputData;