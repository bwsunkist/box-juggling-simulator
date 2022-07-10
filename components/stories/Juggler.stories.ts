import Juggler from '../Templates/Juggler.vue'

export default {
  title: 'Templates/Juggler',
  component: Juggler
}

const Template = (args) => ({
  components: { Juggler },
  setup() {
    return {
      args,
    }
  },
  template: `
    <Juggler></Juggler>
  `,
})

export const Primary = Template.bind({})
