import * as serviceAPI from '@/api/service'

const service = {
  state: {
    serviceContents: {},
    serviceAreas: []
  },
  mutations: {
    SET_SERVICE_CONTENT: (state, { serviceName, content }) => {
      state.serviceContents[serviceName] = content
    }
  },
  actions: {
    async fetchServiceContent({ commit }, { serviceName }) {
      const response = await serviceAPI.fetchServiceContent(serviceName)
      commit('SET_SERVICE_CONTENT', {
        serviceName,
        content: response.data
      })
    }
  }
}

export default service
