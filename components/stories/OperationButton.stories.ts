import OperationButton from '../Parts/OperationButton.vue'

export default {
  title: 'Parts/OperationButton',
  component: OperationButton
}

const Template = (args) => ({
  components: { OperationButton },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OperationButton v-bind="args"></OperationButton>
  `,
})

export const right = Template.bind({})
right.args = {
  isRight: true
}

export const left = Template.bind({})
left.args = {
  isRight: false
}
