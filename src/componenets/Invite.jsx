import React, { useState, useEffect } from 'react';
import { Success } from './invite/Success';
import { Users } from './invite/Users';

// Тут список пользователей: https://reqres.in/api/users
function Invite() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((json) => {
            setUsers(json.data)
        })
        .catch((err) => console.warn(err))
        .finally(() => setIsLoading(false))
    }, [])

    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }    

    const [invitedUsers, setInvitedUsers] = useState([])
    const inviteUser = (id) => {
        if (invitedUsers.includes(id)) {           
            setInvitedUsers((prev) => prev.filter(_id => _id != id))
        } else {
            setInvitedUsers((prev) => [...prev, id])
        }
        
    }    
    const [success, setSuccess] = useState(false)
    const onClickSuccess = () => {
        setSuccess(true)
    }
    const onClickUnSuccess = () => {
        setSuccess(false)
    }

    return (
    <div className='section section_3'>
        <div className="invite">
            {!success ? (
                <Users items={users} isLoading={isLoading} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} inviteUser={inviteUser} invitedUsers={invitedUsers} onClickSuccess={onClickSuccess} />
            ) : (
                <Success count={invitedUsers.length} onClickUnSuccess={onClickUnSuccess}/>
            )}
        </div>
    </div>
  );
}

export default Invite;
