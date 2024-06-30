import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'

import Trash from '../../assets/trash.svg'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef(null)
  const inputAge = useRef(null)
  const inputEmail = useRef(null)

  const getUsers = async () => {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  const createUsers = async () => {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  const deleteUsers = async (id) => {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type="text" ref={inputName} />
        <input placeholder='Idade' name='age' type="number" ref={inputAge} />
        <input placeholder='Email' name='email' type="email" ref={inputEmail} />
        <button type='button' onClick={createUsers} >Cadastrar</button>
      </form>

      {
        users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>

            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Trash" />
            </button>
          </div>
        ))
      }

    </div>

  )
}

export default Home
