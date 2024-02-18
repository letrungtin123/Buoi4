import { Iusers } from "../../interfaces/user.interface";

interface IHandleChange {
	event:
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLTextAreaElement>;
	newUser: Omit<Iusers, 'id'>;
	setNewUser: React.Dispatch<React.SetStateAction<Omit<Iusers, 'id'>>>;
}

export const handleChange = ({
	event,
	newUser,
	setNewUser,
}: IHandleChange) => {
	setNewUser({
		...newUser,
		[event.target.name]: event.target.value,
	});
};