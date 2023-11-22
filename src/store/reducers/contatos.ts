import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      name: 'Yuri Donato',
      email: 'yuridonato@gmail.com',
      tell: '5192383210'
    },
    {
      id: 2,
      name: 'Reidne',
      email: 'reidne@gmail.com',
      tell: '55328504232'
    },
    {
      id: 3,
      name: 'Camila',
      email: 'camila@gmail.com',
      tell: '599320192'
    },
    {
      id: 4,
      name: 'Yara',
      email: 'yara@gmail.com',
      tell: '22992310244'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoExistente) {
        alert('Já existe um contato com este nome na agenda.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novaTarefa)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
