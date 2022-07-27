import JugglingView from '../Views/JugglingView.vue'

export default {
  title: 'Views/JugglingView',
  component: JugglingView
}

const Template = (args) => ({
  components: { JugglingView },
  setup() {
    return {
      args,
    }
  },
  template: `
    <JugglingView v-bind="args"></JugglingView>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
}
