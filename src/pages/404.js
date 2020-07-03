import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
  <Layout>
    <main className="error-page">
        <div className="error-container">
          <h1>このページは削除されたか、存在しないページです</h1>
          <Link to='/' className="btn">
            Homeに戻る
          </Link>
        </div>
    </main>
  </Layout>
  )
}

export default Error
