import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useError } from './useError'
import useStore from '../store'
import axios from 'axios'

export const useMutateAuth = () => {
  const navigate = useNavigate()
  const resetEditedTask = useStore((state) => state.resetEditedTask)
  const { switchErrorHandling } = useError()
  // ミューテーションの定義
  // ミューテーションは、useMutation に渡した第一引数の関数を実行すると、
  // 第二引数のオブジェクトの onSuccess または onError が実行される
  // この例では、loginMutation が実行されると、
  // axios.post が実行される
  // axios.post が成功すると、onSuccess が実行される
  // axios.post が失敗すると、onError が実行される
  // onSuccess と onError は、それぞれ、
  // useMutation の第二引数のオブジェクトの onSuccess と onError に渡した関数
  const loginMutation = useMutation(
    async (user: Credential) => {
      await axios.post(`${process.env.REACT_APP_API_URL}/login`, user)
    },
    {
      onSuccess: () => {
        navigate('/todo')
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  const registerMutation = useMutation(
    async (user: Credential) => {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, user)
    },
    {
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  const logoutMutation = useMutation(
    async () => {
      await axios.post(`${process.env.REACT_APP_API_URL}/logout`)
    },
    {
      onSuccess: () => {
        resetEditedTask()
        navigate('/')
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  return { loginMutation, registerMutation, logoutMutation }
}
