import BoxWithHand from '../Templates/BoxWithHand.vue'

export default {
  title: 'Templates/BoxWithHand',
  component: BoxWithHand
}

const Template = (args) => ({
  components: { BoxWithHand },
  setup() {
    return {
      args,
    }
  },
  template: `
    <BoxWithHand v-bind="args"></BoxWithHand>
  `,
})

export const rightHold = Template.bind({})
rightHold.args = {
  message: 'RH',
  isHold: true,
  isRight: true
}
export const rightHoldRotate = Template.bind({})
rightHoldRotate.args = {
  message: 'RHR',
  isHold: true,
  isRight: true,
  rotate: true
}
export const rightNotHold = Template.bind({})
rightNotHold.args = {
  message: 'RNotH',
  isHold: false,
  isRight: true
}
export const rightNotHoldRotate = Template.bind({})
rightNotHoldRotate.args = {
  message: 'RNoHR',
  isHold: false,
  isRight: true,
  rotate: true
}

export const leftHold = Template.bind({})
leftHold.args = {
  message: 'LH',
  isHold: true,
  isRight: false
}
export const leftHoldRotate = Template.bind({})
leftHoldRotate.args = {
  message: 'LH',
  isHold: true,
  isRight: false,
  rotate: true
}
export const leftNotHold = Template.bind({})
leftNotHold.args = {
  message: 'LNotH',
  isHold: false,
  isRight: false
}
export const leftNotHoldRotate = Template.bind({})
leftNotHoldRotate.args = {
  message: 'LNotH',
  isHold: false,
  isRight: false,
  rotate: true
}
