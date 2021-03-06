import typesWithPrefix from 'app/flux/utils/typesWithPrefix'

export const types = typesWithPrefix('@loadingBar', {
  SHOW: `SHOW`,
  HIDE: `HIDE`,
  HIDE_WITH_ERROR: `HIDE_WITH_ERROR`,
  RESET: `RESET`,
})

export function showLoadingBar() {
  return {
    type: types.SHOW,
  }
}

export function hideLoadingBar() {
  return {
    type: types.HIDE,
  }
}

export function hideLoadingBarWithError() {
  return {
    type: types.HIDE_WITH_ERROR,
  }
}

export function resetLoadingBar() {
  return {
    type: types.RESET,
  }
}
