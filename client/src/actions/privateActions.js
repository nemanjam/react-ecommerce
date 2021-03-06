import axios from "axios";

import { GET_FEATURE, GET_PROFILE, SET_ERROR } from "./types";

export const getProfile = () => async (dispatch, getState) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    };
    const response = await axios.post("/api/profile", null, { headers });

    dispatch({
      type: GET_PROFILE,
      payload: response.data.profile
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};

export const getFeature = () => async (dispatch, getState) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    };
    const response = await axios.post("/api/feature", null, { headers });

    dispatch({
      type: GET_FEATURE,
      payload: response.data.feature
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};
