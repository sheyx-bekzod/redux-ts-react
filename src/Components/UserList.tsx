import React, {useEffect} from 'react';
import {userTypedSelector} from "../hook/useTypesSelector";
import {fetchUser} from "../actionCreators/user";
import {useAction} from "../hook/useAction";

const UserList: React.FC = () => {
    const {user, error, loading} = userTypedSelector(state => state.user)
    const {fetchUser} = useAction()


    useEffect(() => {
        fetchUser()
    }, [])


    if (error) {
        return <h1>{error}</h1>
    }

    if (loading) {
        return <h1>{loading}</h1>
    }


    console.log(user)
    return (
        <div>
            {user.map((u) => (
                <div key={u.id}>{u.name}</div>
            ))}
        </div>
    );
};

export default UserList;