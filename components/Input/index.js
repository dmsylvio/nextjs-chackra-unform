import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input, Text } from '@chakra-ui/react';

export default function Inputs({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  
  return (
    <>
      <Input
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        {...rest}
      />
      { error && <Text fontSize={'medium'} color={'gray.600'}>{error}</Text> }
    </>
  );
}