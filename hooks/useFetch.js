"use client";
import { useCallback, useContext, useState } from "react";
// import { API_URL } from "@/constants";
// import { AuthContext } from "@/Store/Auth/AuthCtx";

const API_URL = "";

/**
 * This hook handles fetching the API. It returns the function to call the API and the response. It also updates the fetch state  to show a loading spinner or error message.
 * @param {String} endpoint The API endpoint that is being fetched
 * @param {String} method The request method (GET, PACHT, POST, DELETE)
 * @param {Boolean} isRemoteEndpoint If the endpoint is not our API
 * @returns {{fetchAPI:(body:{},callback:(responseData)=>{},authenticate:Boolean,formData:Boolean)=>{},error:Boolean,status:'success'|'loading'|null, setError:()=>{}, setStatus:()=>{}}} Returns the function to call the API, error state and status state
 */
const useFetch = (endpoint, method = "GET", isRemoteEndpoint = false) => {
  const [error, setError] = useState();
  const [status, setStatus] = useState();

  // const { token } = useContext(AuthContext);

  const currentEndpoint = isRemoteEndpoint ? endpoint : `${API_URL}${endpoint}`;

  /**
   * This function calls the API and returns the response data on success or shows an error message on failure. The auth token is added automatically.
   * @async
   * @param {{}} body The request body (optional)
   * @returns {Promise<string>} JSON  Returns the response data
   */
  const fetchAPI = useCallback(
    async (
      body = {},
      callback = () => {},
      authenticate = true,
      formData = false
    ) => {
      try {
        setStatus("loading");
        const response = await fetch(currentEndpoint, {
          method,
          ...(method !== "GET" && {
            body: formData ? body : JSON.stringify(body),
          }),
          // ...(method !== "GET" && {
          headers: {
            ...(!formData && { "Content-Type": "application/json" }),
            ...(authenticate && { Authorization: `Bearer ` + token }),
          },
          // }),
        });

        if (!response.ok) {
          throw response.json().then((data) => data);
        }

        const data = await response.json();

        callback(data);

        setStatus("success");
        setTimeout(() => setStatus(null), 3000);

        // return data;
      } catch (error) {
        const err = await error;

        setError(err.message);
        // hide error after 10s
        setTimeout(() => setError(null), 10000);
        setStatus(null);
      }
    },
    [currentEndpoint, method]
  );

  return { fetchAPI, error, status, setError, setStatus };
};
export default useFetch;
