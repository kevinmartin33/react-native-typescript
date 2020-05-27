import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const getAsyncStorageItem = async (key: string, callback:  any=undefined) => {
  const response = await AsyncStorage.getItem(key, callback)
  .catch(error => {
    console.warn('AsyncStorage getItem:', error);
    return undefined
  })
  return response
}

export const setAsyncStorageItem = async (key: string, value: string, callback: any=undefined) => {
  const response = await AsyncStorage.setItem(key, value, callback)
  .catch(error => {
    console.warn('AsyncStorage setItem:', error);
    return undefined
  })
  return response
}

export const removeAsyncStorageItem = async (key: string, callback: any=undefined) => {
  const response = await AsyncStorage.removeItem(key, callback)
  .catch(error => {
    console.warn('AsyncStorage removeItem:', error);
    return undefined
  })
  return response
}

export const clearAsyncStorage = async (callback: any=undefined) => {
  const response = await AsyncStorage.clear(callback)
  .catch(error => {
    console.warn('AsyncStorage clear:', error);
    return undefined
  })
  return response
}