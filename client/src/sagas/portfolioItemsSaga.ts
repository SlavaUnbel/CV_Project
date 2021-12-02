import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-symbiote/types';

import { loadingActions } from '../reducers/loadingReducer';
import { messageActions } from '../reducers/messageReducer';
import { portfolioItemsActions } from '../reducers/portfolioItemsReducer';
import { services } from '../services/services';

export default function* portfolioItemsWatcherSaga() {
  yield takeEvery(
    portfolioItemsActions.expandingCards.get,
    expandingCardsWorker
  );
  yield takeEvery(
    portfolioItemsActions.rotatingNavigation.get,
    rotatingNavigationWorker
  );
  yield takeEvery(portfolioItemsActions.dadJokes.get, dadJokesWorker);
  yield takeEvery(portfolioItemsActions.faqCollapse.get, faqCollapseWorker);
  yield takeEvery(portfolioItemsActions.movies.get, movieAppWorker);
  yield takeEvery(
    portfolioItemsActions.githubProfiles.get,
    githubProfilesWorker
  );
  yield takeEvery(
    portfolioItemsActions.testimonialsSwitcher.get,
    testimonialsSwitcherWorker
  );
}

function* expandingCardsWorker() {
  yield setLoading(true);

  try {
    const payload: IExpandingCards[] = yield call(
      services.portfolioItemsService.getExpandingCardsData
    );
    yield put(portfolioItemsActions.expandingCards.set(payload));
    if (payload.length === 0) yield pushWarning("No data found");
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

function* rotatingNavigationWorker() {
  yield setLoading(true);

  try {
    const payload: IRotatingNavigation = yield call(
      services.portfolioItemsService.getRotatingNavigationData
    );
    yield put(portfolioItemsActions.rotatingNavigation.set(payload[0]));
    if (!payload[0]) yield pushWarning("No data found");
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

function* dadJokesWorker() {
  yield setLoading(true);

  try {
    const payload: IDadJokes = yield call(
      services.portfolioItemsService.getDadJokesDataFromApi
    );
    payload.status === 200
      ? yield put(portfolioItemsActions.dadJokes.set(payload))
      : yield pushError(`Api responded with error code ${payload.status}`);
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

function* faqCollapseWorker() {
  yield setLoading(true);

  try {
    const payload: IFaqCollapse[] = yield call(
      services.portfolioItemsService.getFaqCollapseData
    );
    yield put(portfolioItemsActions.faqCollapse.set(payload));
    if (payload.length === 0) yield pushWarning("No data found");
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

function* movieAppWorker(url: Action<[url: string]>) {
  yield setLoading(true);

  try {
    const payload = yield call(
      services.portfolioItemsService.getMovieAppDataFromApi,
      url.payload
    );
    yield put(portfolioItemsActions.movies.set(payload.results));
    if (payload.results.length === 0) yield pushWarning("No data found");
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

function* githubProfilesWorker(url: Action<[url: string]>) {
  yield setLoading(true);

  try {
    const payloadUser = yield call(
      services.portfolioItemsService.getGithubProfilesUserDataFromApi,
      url.payload
    );
    if (payloadUser.message === "Not Found") {
      yield put(portfolioItemsActions.githubProfiles.setNotFound(true));
      yield pushWarning("No user found!");
    } else {
      yield put(portfolioItemsActions.githubProfiles.setUser(payloadUser));
    }

    const payloadRepos = yield call(
      services.portfolioItemsService.getGithubProfilesReposDataFromApi,
      url.payload
    );
    if (payloadUser.message === "Not Found") {
      yield pushWarning("No repositories found!");
    } else {
      yield put(portfolioItemsActions.githubProfiles.setRepos(payloadRepos));
    }
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield put(portfolioItemsActions.githubProfiles.setSearchForAUser(false));
    yield setLoading(false);
  }
}

function* testimonialsSwitcherWorker(id: Action<[id: number]>) {
  yield setLoading(true);

  try {
    const payload: ITestimonialsSwitcher = yield call(
      services.portfolioItemsService.getTestimonialsSwitcherDataById,
      id.payload
    );
    yield put(portfolioItemsActions.testimonialsSwitcher.set(payload));
    if (!payload) yield pushWarning("No data found");
  } catch (error: any) {
    yield pushError(error);
  } finally {
    yield setLoading(false);
  }
}

//worker helpers
function* setLoading(loading: boolean) {
  yield put(loadingActions.loading.set(loading));
}

function* pushError(text: string) {
  yield put(messageActions.message.error(text));
}

function* pushWarning(text: string) {
  yield put(messageActions.message.warning(text));
}
