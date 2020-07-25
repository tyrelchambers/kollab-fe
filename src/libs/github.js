import getApi from "../api/getApi"
import { inject, observer } from "mobx-react"
import { useEffect } from "react";
import { useHistory } from "react-router";

const Auth = ({UserStore}) => {
  const params = new URLSearchParams(window.location.search)
  const history = useHistory()

  useEffect(() => {
    getApi({
      url: '/callback/github',
      params: {
        code: params.get("code"),
        state: params.get("state")
      }
    }).then(res => {
      if (res) {
        UserStore.addAccessToken(res.accessToken)
        history.push('/dashboard')
      }
    })
  }, [])

  return null;
};

export default inject("UserStore")(observer(Auth))