import { useSelector } from "react-redux"
import {
	useState
} from "react"
import EditProfile from "./EditProfile"
import Profile from "./Profile"

const ProfileBuilder = () => {
	const {user} = useSelector((state) => state.userStore)
	const [openEditProfile, setOpenEditProfile] = useState(false)

	return (
		<div className='category'>
			{
				openEditProfile
					?
					<EditProfile
						user={user}
						setOpenEditProfile={setOpenEditProfile}
					/>
					:
					<Profile
						user={user}
						setOpenEditProfile={setOpenEditProfile}
					/>

			}
		</div>
	);
};

export default ProfileBuilder
