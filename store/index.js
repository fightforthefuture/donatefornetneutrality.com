import Vuex from 'vuex'
import config from '~/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      anPetitionId: config.actionNetworkPetitionId,
      currentAmountDonated: config.currentAmountDonated,
      donationGoal: config.donationGoal,
      donationAmounts: config.donationAmounts,
      defaultDonation: config.defaultDonation,
      donationDescription: config.donationDescription,
      donationTags: config.donationTags,
      showAltPaymentMethods: config.showAltPaymentMethods,
      paypalEmail: config.paypalEmail,
      paypalReturnUrl: config.paypalReturnUrl,
      modalVisible: false,
      modalType: null,
      testVariant: null,
      hasAlreadyDonated: false
    },
    mutations: {
      setModalVisibility(state, value) {
        state.modalVisible = value
      },

      setModalType(state, value) {
        state.modalType = value
      },

      setTestVariant(state, value) {
        state.testVariant = value
      },

      setHasAlreadyDonated(state, value) {
        state.hasAlreadyDonated = value
      }
    },
    getters: {
      testVariantName: state => {
        return state.testVariant === 'a' ? 'DFNN_subheading_above_form' : 'DFNN_subheading_below_form'
      }
    }
  })
}

export default createStore
