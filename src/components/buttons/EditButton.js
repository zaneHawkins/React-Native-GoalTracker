// @flow

import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../styles/colors'

export const EditButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    rejectResponderTermination
    underlayColor="white"
  >
    <Ionicons name="md-create" size={28} color={colors.DARK_BLUE} />
  </TouchableHighlight>
)
